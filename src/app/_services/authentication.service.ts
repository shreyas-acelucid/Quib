import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/authentication';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(payload: Login): Observable<any> {
    const endpointUrl = `http://44.211.90.48/api/Admin/adminLogin?Email=${payload.email}&Password=${payload.password}`;
    return this.http.post(endpointUrl, null);
  }

  forgetPassword() {}
}
