import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, endWith } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  QUIB_USER,
  Quib_User,
  Quib,
  QUIB_LIST,
  BUMP_IN_USER_LIST,
  FLAG_IN_USER_LIST,
  ADMIN_QUIB,
  QUIB_USER_MOVIE_LIST,
  MODERATOR_MOVIE_LIST,
} from '../_models/Quib_user';

@Injectable({
  providedIn: 'root',
})
export class QuibService {
  Quib_Admin = environment.QUIB_ADMIN;
  constructor(private http: HttpClient) {}
  SearchKeyWord = new BehaviorSubject({
    displayName: null,
    firstName: null,
    lastName: null,
    email: null,
    Gsearch: null,
  });
  adminQuib = new BehaviorSubject({
    userId: null,
    movieId: null,
  });
  QuibSearchWord = new BehaviorSubject({
    displayName: null,
    title: null,
    body: null,
    time: null,
    createdDate: null,
    postedDate: null,
    averageRating: null,
    numOfRatings: null,
    Gseacrh: null,
  });
  getUserList(): Observable<Quib_User[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/GetUserList`;
    return this.http.get<Quib_User[]>(endpointUrl);
  }

  createNewUser(payload: QUIB_USER) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/Register`;
    const formData = new FormData();
    formData.append('About', payload.About);
    formData.append('ConfirmPassword', payload.ConfirmPassword);
    formData.append('Password', payload.Password);
    formData.append('Email', payload.Email);
    formData.append('FirstName', payload.FirstName);
    formData.append('LastName', payload.LastName);
    formData.append('Username', payload.Username);
    formData.append('IsEnabled', payload.IsEnabled);
    formData.append('AvatarBase256ImagePath', payload.AvatarBase256ImagePath);
    return this.http.post(endpointUrl, formData);
  }

  deleteUser(Id: string) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/DeleteUser?Id=${Id}`;
    return this.http.delete(endpointUrl);
  }

  restoreUser(Id: string) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/RestoreUser?Id=${Id}`;
    return this.http.put(endpointUrl, {});
  }

  IsEnabled(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    return of('');
  }

  IsBumped(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    return of('');
  }

  changeUserStatus(Id: string, Status: boolean) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/ChangeStatus?Id=${Id}&IsPending=${Status}`;
    return this.http.put(endpointUrl, Id);
  }

  AdminQuibList(payload): Observable<ADMIN_QUIB> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/UserQuibDetail?pageNo=1&MovieId=${payload.movieId} &UserId=${payload.userId} `;
    return this.http.get<ADMIN_QUIB>(endpointUrl);
  }
  getQuibList(pageNo) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/GetAllQuibs?pageNo=${pageNo}`;
    return this.http.get(endpointUrl);
  }

  deleteQuib(QuibId) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/DeleteQuibById?Id=${QuibId}`;
    return this.http.delete(endpointUrl);
  }

  restoreQuib(QuibId) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/RestoreQuibById?Id=${QuibId}`;
    return this.http.put(endpointUrl, null);
  }

  AssignMovieToModeratorUser(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/AssignMovies`;
    return this.http.post(endpointUrl, payload);
  }
  markUserAsModerator(userId: string, Status: boolean) {
    const payload = {
      userId: userId,
      Status: Status,
    };
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/UpdateModeratorStatus?UserId=${userId}&Status=${Status}`;
    return this.http.put(endpointUrl, payload);
  }

  getBumpUserListByQuibId(id: number): Observable<BUMP_IN_USER_LIST[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UserListBIn?QuibId=${id}`;
    return this.http.get<BUMP_IN_USER_LIST[]>(endpointUrl);
  }
  getFlageUserListByQuibId(id): Observable<FLAG_IN_USER_LIST[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UserListFlagged?QuibId=${id}`;
    return this.http.get<FLAG_IN_USER_LIST[]>(endpointUrl);
  }
  submitBumpUserListdata(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateCurrentCuratorPoint`;
    return this.http.post(endpointUrl, payload);
  }
  submitFlagUserListdata(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateCurrentFlaggerPoint`;
    return this.http.post(endpointUrl, payload);
  }
  getUserQuibedMoviesList(userId: string): Observable<QUIB_USER_MOVIE_LIST[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/GetUserQuibDetailById?UserId=${userId}`;
    return this.http.get<QUIB_USER_MOVIE_LIST[]>(endpointUrl);
  }

  getAllMoviesAdminPanel() {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetMovieDetailsAdminPanel`;
    return this.http.get(endpointUrl);
  }

  getAllUsersAdminPanel() {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/GetUsersForAdminPanel`;
    return this.http.get(endpointUrl);
  }

  async getAllFilteredUsers(movieId) {
    const userId = localStorage.getItem('userId');
    const endpointUrl = `${environment.QUIB_ADMIN}/GetQuibsUsersByMovieId?movieId=${movieId}&UserId=${userId}`;
    return this.http.get(endpointUrl);
  }

  async getAllFilteredMovies(userId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/AllQubbiedMoviesByUserId?userId=${userId}`;
    return this.http.get(endpointUrl);
  }

  async getFilteredQuibs(userId, movieId) {
    var endpoint;
    if (userId == null) {
      endpoint = `${environment.QUIB_ADMIN}/GetQuibsAdminPanel?movieId=${movieId}`;
    } else if (movieId == null)
      endpoint = `${environment.QUIB_ADMIN}/GetQuibsAdminPanel?userId=${userId}`;
    else
      endpoint = `${environment.QUIB_ADMIN}/GetQuibsAdminPanel?movieId=${movieId}&userId=${userId}`;
    return this.http.get(endpoint);
  }

  getModeratorMovies(userId): Observable<MODERATOR_MOVIE_LIST[]> {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetAssignedMoviesByUserId?userId=${userId}`;
    return this.http.get<MODERATOR_MOVIE_LIST[]>(endpointUrl);
  }

  async removeModeratorMovie(moderatorId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/removeAssignedMovies?moderatorId=${moderatorId}`;
    return this.http.post(endpointUrl, null);
  }

  async getAdminScreenshots(movieId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetAdminScreenshots?movieId=${movieId}`;
    return this.http.get(endpointUrl);
  }

  async updateIsSelected(QuibId: number, checked: boolean) {
    const endpointUrl = `${environment.QUIB_ADMIN}/updateIsSelected?quibId=${QuibId}&IsSelected=${checked}`;
    return this.http.put(endpointUrl, null);
  }

  async getSelectedScreenshots(movieId, status) {
    const endpointUrl = `${environment.QUIB_ADMIN}/fetchScreenshotsBySelectedStatus?movieId=${movieId}&isSelected=${status}`;
    return this.http.get(endpointUrl);
  }

  async fetchScreenshotsByTimeRange(movieId, fromTime, toTime) {
    const endpointUrl = `${environment.QUIB_ADMIN}/fetchScreenshotsByTimeRange?movieId=${movieId}&startTime=${fromTime}&endTime=${toTime}`;
    return this.http.get(endpointUrl);
  }

  async addScreenShots(payload) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateScreenshot`;
    return this.http.post(endpointUrl, payload);
  }

  async addDialogues(payload) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateDialogue`;
    return this.http.post(endpointUrl, payload);
  }

  async fetchDialogues(movieId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/fetchAllDialogues?movieId=${movieId}`;
    return this.http.get(endpointUrl);
  }

  async fetchDialoguesBySelectedStatus(movieId, isSelected) {
    const endpointUrl = `${environment.QUIB_ADMIN}/fetchDialogueQuibsBySelectedStatus?movieId=${movieId}&isSelected=${isSelected}`;
    return this.http.get(endpointUrl);
  }

  async fetchDialoguesByTimeRange(movieId, fromTime, toTime) {
    const endpointUrl = `${environment.QUIB_ADMIN}/fetchDialoguesByTimeRange?movieId=${movieId}&startTime=${fromTime}&endTime=${toTime}`;
    return this.http.get(endpointUrl);
  }

  async editDialogue(dialogueData) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateQuibById`;
    return this.http.put(endpointUrl, dialogueData);
  }

  async submitMerged(parentQuibId, childQuibId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/MergeDialogues?ParentQuibId=${parentQuibId}&ChildQuibId=${childQuibId}`;
    return this.http.put(endpointUrl, null);
  }

  async unmergeDialogues(parentQuibId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/UnmergeDialogues?ParentQuibId=${parentQuibId}`;
    return this.http.put(endpointUrl, null);
  }

  getRatingsOfQuibById(QuibId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/QuibRatingDetails?QuibId=${QuibId}`;
    return this.http.get(endpointUrl);
  }

  async getAvatar() {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/Avatar/GetAllAvatars`;
    return this.http.get(endpointUrl);
  }

  async deleteAvatar(AvatarId) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/Avatar/DeleteAvatarById?Id=${AvatarId}`;
    return this.http.put(endpointUrl, null);
  }

  async addAvatar(payload) {
    const endpointUrl = `${environment.QUIB_ADMIN}/AddAvatar`;
    return this.http.post(endpointUrl, payload);
  }

  async EditTos(payload) {
    var payloadValue = { TOSText: payload };
    const endpointUrl = `${environment.QUIB_ADMIN}/EditTOS`;
    return this.http.put(endpointUrl, payloadValue);
  }

  async GetTos() {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetTOS`;
    return this.http.get(endpointUrl);
  }

  async GetRecommendedMovies() {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetRecommendedMovies`;
    return this.http.get(endpointUrl);
  }

  AddToRecommendedMovies(Id, recommend) {
    const endpointUrl = `${environment.QUIB_ADMIN}/RecommendMovie?Id=${Id}&recommend=${recommend}`;
    return this.http.put(endpointUrl, recommend);
  }
  EditThreshold(Id, threshold) {
    const endpointUrl = `${environment.QUIB_ADMIN}/EditThreshold?Id=${Id}&threshold=${threshold}`;
    return this.http.put(endpointUrl, threshold);
  }
  Getdisplay() {
    const endpointUrl = `${environment.QUIB_ADMIN}/getdisplay`;
    return this.http.get(endpointUrl);
  }
  DisplayRecommendedMovies(status: boolean) {
    const endpointUrl = `${environment.QUIB_ADMIN}/DisplayRecommendedMovies?display=${status}`;
    return this.http.put(endpointUrl, status);
  }

  async GetTooltips() {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetAllTooltips`;
    return this.http.get(endpointUrl);
  }

  async EditTooltip(buttonid, tooltiptext, buttonname) {
    const endpointUrl = `${environment.QUIB_ADMIN}/EditTooltip?buttonid=${buttonid}&tooltiptext=${tooltiptext}&buttonname=${buttonname}`;
    return this.http.put(endpointUrl, null);
  }

  GetTooltipDisplay() {
    const endpointUrl = `${environment.QUIB_ADMIN}/GetTooltipDisplay`;
    return this.http.get(endpointUrl);
  }

  DisplayTooltips(status: boolean) {
    const endpointUrl = `${environment.QUIB_ADMIN}/DisplayTooltips?display=${status}`;
    return this.http.put(endpointUrl, status);
  }

  EditTooltipDisplay(buttonid, isdisabled) {
    const endpointUrl = `${environment.QUIB_ADMIN}/EditTooltipDisplay?buttonid=${buttonid}&isdisabled=${isdisabled}`;
    return this.http.put(endpointUrl, null);
  }
  
  resetPassword(Email: string) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/Admin/adminForgotPassword?Email=${Email}`;
    return this.http.post(endpointUrl, null);
  }
}
