import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable,BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import {Movies } from "../_models/movies"
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
   constructor(private http: HttpClient) { }
    MovieSearchKeyWord = new BehaviorSubject({
        id: null,
        title: null,
        director: null,
        releaseYear: null,
        length: null
    })
    getMovieList():Observable<Movies[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/Movies`;
        return this.http.get<Movies[]>(endpointUrl)
    }
    getActiveMoviesList():Observable<Movies[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/ActiveMovies`;
       return this.http.get<Movies[]>(endpointUrl)
    }
    markAsActive(payload) {
        const formData = new FormData()
        formData.append("Id",payload.id)
        formData.append("Title",payload.title)
        formData.append("Director",payload.director)
        formData.append("ReleaseYear",payload.releaseYear)
        formData.append("Time.Hour",payload.HH)
        formData.append("Time.Minute",payload.MM)
        formData.append("Time.Seconds",payload.SS)
        formData.append("IsActive",payload.isActive)
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/UpdateMovie`;
         return this.http.put(endpointUrl, formData, { 'headers': httpOptions });
        
    }
    deleteMovies(moviesId) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/DeleteMovies?Id=${moviesId}`;
        return this.http.delete(endpointUrl, { 'headers': httpOptions });
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
