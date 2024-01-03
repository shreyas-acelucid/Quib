import { Component, OnInit } from '@angular/core';

import { QuibService } from 'src/app/_services/Quib.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-dailogues',
  templateUrl: './admin-dailogues.component.html',
  styleUrls: ['./admin-dailogues.component.scss'],
})
export class AdminDailoguesComponent implements OnInit {
  allDialogues: any[] = [];
  movieTitle: string = '';
  movieId: number = 0;
  checked: boolean = true;
  disabled: boolean = false;
  color: ThemePalette = 'accent';
  display: boolean = false;
  message: string = '';
  timeRangeSelectionForm = new FormGroup({});
  timeRangeSelector: boolean = false;
  displayEditDialog: boolean = false;
  editedText: string = '';

  editDialogueHeaderMessage: string = '';
  currentDialogueIndex: number;
  previousDialogueIndex: number;
  editTextPopup: boolean = false;
  mergeDialoguePopup: boolean = false;
  confirmPopup: boolean = false;

  constructor(
    private QuibService: QuibService,
    private route: ActivatedRoute,
    private toastr: ToastrMsgService,
    private fb: FormBuilder,

    private confirmationService: ConfirmationService
  ) {
    this.timeRangeSelectionForm = this.fb.group({
      fromHours: ['', [Validators.required]],
      fromMinutes: ['', [Validators.required]],
      fromSeconds: ['', [Validators.required]],
      toHours: ['', [Validators.required]],
      toMinutes: ['', [Validators.required]],
      toSeconds: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('movieId')) || 0;
      this.movieTitle = params.get('movieTitle') || '';
      this.fetchMovieDialogues();
    });
  }

  getTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = this.padZero(hours);
    const formattedMinutes = this.padZero(minutes);
    const formattedSeconds = this.padZero(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  async fetchMovieDialogues() {
    (await this.QuibService.fetchDialogues(this.movieId)).subscribe({
      next: (response: any[]) => {
        this.allDialogues = response.filter(
          (dialogue) => !dialogue.isScreenshot
        );
        this.toastr.showSuccess(
          'All dialogues fetched successfully!',
          'Dialogues'
        );
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async updateIsSelected(QuibId: number, event: MatSlideToggleChange) {
    const checked: boolean = event.checked;
    (await this.QuibService.updateIsSelected(QuibId, checked)).subscribe({
      next: (response) => {
        console.log(response);
        if (checked) {
          this.toastr.showSuccess('Dialogue selected', 'Dialogue');
        } else {
          this.toastr.showWarning('Dialogue unselected', 'Dialogue');
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async getDialoguesByStatus(status: boolean) {
    (
      await this.QuibService.fetchDialoguesBySelectedStatus(
        this.movieId,
        status
      )
    ).subscribe({
      next: (response: any[]) => {
        this.allDialogues = response;
        if (this.allDialogues.length == 0) {
          this.toastr.showError(
            'Oops! there are no unselected dialogues',
            'Dialogues'
          );
        } else {
          if (status) {
            this.toastr.showSuccess(
              'Fetched all selected dialogues',
              'Dialogues'
            );
          } else {
            this.toastr.showSuccess(
              'Fetched all unselected dialogues',
              'Dialogues'
            );
          }
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  async fetchDialoguesbyTime() {
    const fromHours: number =
      this.timeRangeSelectionForm.controls['fromHours'].value;
    const toHours: number =
      this.timeRangeSelectionForm.controls['toHours'].value;
    const fromMinutes: number =
      this.timeRangeSelectionForm.controls['fromMinutes'].value;
    const toMinutes: number =
      this.timeRangeSelectionForm.controls['toMinutes'].value;
    const fromseconds: number =
      this.timeRangeSelectionForm.controls['fromSeconds'].value;
    const toSeconds: number =
      this.timeRangeSelectionForm.controls['toSeconds'].value;

    const fromTime = fromHours * 3600 + fromMinutes * 60 + fromseconds;
    const toTime = toHours * 3600 + toMinutes * 60 + toSeconds;

    if (fromTime > toTime) {
      this.toastr.showError('From Time should be less than To time', 'Oops!');
    } else {
      this.display = false;
      this.timeRangeSelector = false;
      (
        await this.QuibService.fetchDialoguesByTimeRange(
          this.movieId,
          fromTime,
          toTime
        )
      ).subscribe({
        next: (response: any[]) => {
          this.allDialogues = response;
          if (this.allDialogues.length == 0) {
            this.toastr.showError(
              'Oops! there are no dialogues in this particular time range',
              'Dialogues'
            );
          } else {
            this.toastr.showSuccess(
              'Dialogues fetched for a particular time range',
              'Dialogues'
            );
          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
    }
  }

  EditDialog(dialogue): void {
    this.editedText = dialogue.body;
    this.displayEditDialog = true;
    this.editTextPopup = true;
    this.mergeDialoguePopup = false;
    this.currentDialogueIndex = this.allDialogues.indexOf(dialogue);
    this.editDialogueHeaderMessage = 'Edit Dialogue';
  }

  closeEditDialog(): void {
    this.displayEditDialog = false;
  }

  async submitEdit(dialogueText: string) {
    const dialogue = this.allDialogues[this.currentDialogueIndex];
    const payload = new FormData();
    payload.append('Id', dialogue.id);
    payload.append('Body', dialogueText);
    payload.append('Time', dialogue.time);
    payload.append('IsEnabled', dialogue.isEnabled);
    payload.append('IsPosted', dialogue.isPosted);

    (await this.QuibService.editDialogue(payload)).subscribe({
      next: (response) => {
        this.fetchMovieDialogues();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
    this.closeEditDialog();
  }

  mergeDialogues(currentDialogue): void {
    const previousDialogue =
      this.allDialogues[this.allDialogues.indexOf(currentDialogue) - 1];
    this.editedText = previousDialogue.body + ' ' + currentDialogue.body;
    this.displayEditDialog = true;
    this.mergeDialoguePopup = true;
    this.editTextPopup = false;
    this.currentDialogueIndex = this.allDialogues.indexOf(currentDialogue);
    this.previousDialogueIndex = this.allDialogues.indexOf(previousDialogue);
    this.editDialogueHeaderMessage = 'Merge Dialogues';
  }

  async submitMerged(dialogueText: string) {
    const currentDialogueId = this.allDialogues[this.currentDialogueIndex].id;
    const previousDialogueId = this.allDialogues[this.previousDialogueIndex].id;
    const previousDialogue = this.allDialogues[this.previousDialogueIndex];
    (
      await this.QuibService.submitMerged(previousDialogueId, currentDialogueId)
    ).subscribe({
      next: (response) => {
        this.submitMergedEdit(dialogueText, previousDialogue);
      },
      error: (error) => {},
      complete: () => {},
    });
    this.closeEditDialog();
  }

  async submitMergedEdit(dialogueText: string, dialogue) {
    const payload = new FormData();
    payload.append('Id', dialogue.id);
    payload.append('Body', dialogueText);
    payload.append('Time', dialogue.time);
    payload.append('IsEnabled', dialogue.isEnabled);
    payload.append('IsPosted', dialogue.isPosted);

    (await this.QuibService.editDialogue(payload)).subscribe({
      next: (response) => {
        this.fetchMovieDialogues();
        this.toastr.showSuccess('Merge', 'Dialogues merged successfully');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  confirmUnmergeDialog(parentDialogueId) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to unmerge?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: async () => {
        (await this.QuibService.unmergeDialogues(parentDialogueId)).subscribe({
          next: (response) => {
            this.fetchMovieDialogues();
            this.toastr.showSuccess(
              'Unmerge',
              'Dialogues unmerged sussessfully'
            );
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {},
        });
      },
      reject: () => {
        // User clicked 'No' or closed the dialog
      },
    });
  }
}
