import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatMessage } from 'devextreme/localization';
import { FORMERR } from 'dns';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Userdata, MovieData, QuibData } from '../DummyData/userData';
import { QUIB_USER, Quib_User } from "../_models/Quib_user"

@Injectable({
  providedIn: 'root'
})

export class QuibService {
  Quib_Admin = environment.QUIB_ADMIN
  constructor(private http: HttpClient) { }

  getUserList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.QUIB_ADMIN}/user`;
    //return this.http.get:<Quib_User[]>(endpointUrl);
    return of(Userdata)
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
  deleteUser(Id: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    let indexOrder = Userdata.findIndex(item => item.id === Id)
    Userdata.splice(Userdata.findIndex((index) => index.id == Id), 1);
    return of(Userdata[indexOrder])
  }
  IsEnabled(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    let index = QuibData.findIndex(item => item.id === Id)
    if (Status === true) {
      QuibData[index].isEnabled = "Approved"
    } else {
      QuibData[index].isEnabled = "Decline"
    }
    return of(QuibData[index])
  }

  IsBumped(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    let index = QuibData.findIndex(item => item.id === Id)
    if (Status === true) {
      QuibData[index].isBumped = "Saved"
    } else {
      QuibData[index].isBumped = "Decline"
    }
    return of(QuibData[index])
  }

  markAsActive(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = Userdata.findIndex(item => item.id === Id)
    if (Status === true) {
      Userdata[index].status = "Approved"
    } else {
      Userdata[index].status = "Decline"
    }
    return of(Userdata[index])
  }


  getMostActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    return of(QuibData)
  }
  getRecentActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    return of(QuibData)
  }
  getAlphBeticQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    return of(QuibData)
  }
  deleteQuib(QuibId) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    let index = QuibData.findIndex(item => item.id === QuibId)
    QuibData.splice(QuibData.findIndex((index) => index?.id == QuibId), 1);
    return of(QuibData[index])
  }


}
