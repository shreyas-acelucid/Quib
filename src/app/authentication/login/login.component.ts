import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CommonService } from 'src/app/_services/common';
import { MoviesService } from 'src/app/_services/movies.service';
import { QuibService } from 'src/app/_services/Quib.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrMsgService,
    private CommonService: CommonService,
    private MoviesService: MoviesService,
    private QuibService: QuibService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { email, password } = this.form.value;
    const payload = { email: email, password: password };
    this.authenticationService.login(payload).subscribe(
      (res: any) => {
        console.log(res);
        if (res.errors) {
          this.router.navigateByUrl('/login');
          this.toastr.showError('Login failed', 'Login');
        } else {
          //localStorage.setItem('token', res.token);
          localStorage.setItem('adminId', res.id);
          if (this.CommonService.getMovieSearchWord() != null) {
            this.MoviesService.MovieSearchKeyWord.next(
              this.CommonService.getMovieSearchWord()
            );
          }
          if (this.CommonService.getUserSearchkeyWord() != null) {
            this.QuibService.SearchKeyWord.next(
              this.CommonService.getUserSearchkeyWord()
            );
          }
          if (this.CommonService.getQuibSearchWord() != null) {
            this.QuibService.QuibSearchWord.next(
              this.CommonService.getQuibSearchWord()
            );
          }
          this.router.navigateByUrl('/customer/quib-user');
          let email = localStorage.getItem('email');
          this.toastr.showSuccess('Login Success', 'Login');
        }
      },
      (error: any) => {
        console.error(error);
        let errorMessage = 'An error occurred';

        // Check if the error is an HTTP error with a response body
        if (error.status && error.error && error.error.errors) {
          errorMessage = error.error.errors[0].password || errorMessage;
        }

        this.toastr.showError(errorMessage, 'Login Failed');
      }
    );
  }

  redirectToForgotPassword() {
    window.location.href =
      'https://quibs.com/Identity/Account/ForgotPassword';
  }

  ngOnInit(): void { }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
