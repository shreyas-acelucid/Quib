import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Movies } from "../_models/movies"
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
   constructor(private http: HttpClient) { }
    getMovieList():Observable<Movies[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/Movies`;
        return this.http.get<Movies[]>(endpointUrl)
    }
    getActiveMoviesList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/Movies`;
       return this.http.get(endpointUrl)
    }
    markAsActive(id, Status) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        return of("nvbbjs")
    }
    deleteMovies(moviesId) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        return of("bvsbh")
    }
    Submit(payload) {
        const formData = new FormData()
        formData.append("Title",payload.Title)
        formData.append("Director",payload.Director)
        formData.append("ReleaseYear",payload.ReleaseYear)
        formData.append("Time.Hour",payload.Hour)
        formData.append("Time.Minute",payload.Minute)
        formData.append("Time.Seconds",payload.Seconds)
        formData.append("IsActive",payload.IsActive)
        formData.append("PosterImage",payload.PosterImage)
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/AddMovie`
        return this.http.post(endpointUrl,formData  );
    }
    submitMoviePosterData(payload){
        const formData = new FormData()
        formData.append("PosterImage",payload.PosterImage)
        formData.append("Id",payload.id) 
        const endpointUrl = `${environment.QUIB_ADMIN}/UpdateMoviePoster`
       return this.http.put(endpointUrl,formData)
    }
    editMovies(payload, moviesId) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
       return of(payload)
    }
}
