import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { QUIB_USER, Quib_User,Quib, QUIB_LIST, BUMP_IN_USER_LIST, FLAG_IN_USER_LIST, ADMIN_QUIB } from "../_models/Quib_user"

@Injectable({
  providedIn: 'root'
})

export class QuibService {
  Quib_Admin = environment.QUIB_ADMIN
  constructor(private http: HttpClient) { }
  SearchKeyWord = new BehaviorSubject({
    displayName:null,
    firstName: null,
    lastName: null,
    email: null,
    Gsearch:null
  });
  adminQuib = new BehaviorSubject({
    userId: null,
    movieId: null
  })
  QuibSearchWord = new BehaviorSubject({
    displayName:null,
    title: null,
    body: null,
    time: null,
    createdDate:null,
    postedDate:null,
    avr:null,
    rating:null,
    Gseacrh:null
  })
  getUserList():Observable<Quib_User[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/GetUserList`;
    return this.http.get<Quib_User[]>(endpointUrl)
  }

  createNewUser(payload: QUIB_USER) {
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/Register`;
    const formData = new FormData();
    formData.append("About", payload.About)
    formData.append("ConfirmPassword", payload.ConfirmPassword)
    formData.append("Password", payload.Password)
    formData.append("Email", payload.Email)
    formData.append("FirstName", payload.FirstName)
    formData.append("LastName", payload.LastName)
    formData.append("Username", payload.Username)
    formData.append("IsEnabled", payload.IsEnabled)
    formData.append("AvatarBase256ImagePath", payload.AvatarBase256ImagePath)
    return this.http.post(endpointUrl, formData)
  }
  
  deleteUser(Id:string) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/DeleteUser?Id=${Id}`;
    return this.http.delete(endpointUrl)
   }

  IsEnabled(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    return of("")
  }

  IsBumped(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    
   return of("")
  }

  changeUserStatus(Id: string, Status: boolean) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/User/ChangeStatus?Id=${Id}&IsPending=${Status}`;
    return this.http.put(endpointUrl, Id)
  }


  AdminQuibList(payload):Observable<ADMIN_QUIB[]> {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/GetQuibByUserIdAndMovieId?MovieId=${payload.movieId}&UserId=${payload.userId}`;
    return this.http.get<ADMIN_QUIB[]>(endpointUrl)
  }
  getQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/GetAllQuibs?pageNo=${1}`;
    return this.http.get(endpointUrl);
  }
  
  deleteQuib(QuibId) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    return of("")
  }

  AssignMovieToModeratorUser(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/AssignMovies`;
    return this.http.post(endpointUrl, payload)
  }
  markUserAsModerator(userId: string, Status: boolean) {
    const payload = {
      userId: userId,
      Status: Status
    }
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/UpdateModeratorStatus?UserId=${userId}&Status=${Status}`;
    return this.http.put(endpointUrl, payload)
  }

  getBumpUserListByQuibId(id:number):Observable<BUMP_IN_USER_LIST[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UserListBIn?QuibId=${id}`
    return this.http.get<BUMP_IN_USER_LIST[]>(endpointUrl) 
  }
  getFlageUserListByQuibId(id):Observable<FLAG_IN_USER_LIST[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UserListFlagged?QuibId=${id}`
    return this.http.get<FLAG_IN_USER_LIST[]>(endpointUrl) 
  }
  submitBumpUserListdata(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateCurrentCuratorPoint`
    return this.http.post(endpointUrl, payload)
  }
  submitFlagUserListdata(payload) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/api/QuibStream/UpdateCurrentFlaggerPoint`
    return this.http.post(endpointUrl, payload)
  }
}
