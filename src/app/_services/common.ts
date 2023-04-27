import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { userSearchKeyWord } from '../_models/Quib_user';
import { MovieSearchKeyWord } from '../_models/movies';

@Injectable({ providedIn: 'root' })
export class CommonService {
    URLBase64:any
    myData:any;
    constructor(
        private http:HttpClient
    ) {
    }
    generateRandomNo() {
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        return `ASNO/${StringValueOfDate}`
    }
    generateRandomeOrderId() {
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        return `${StringValueOfDate}`
    }

    getCurrentDate() {
        let TodayDate = new Date().toLocaleDateString()
        return `${TodayDate}`
    }

    convertDate(dateFormat) {
        return moment(dateFormat).format("MM-DD-YYYY");
    }

    convertTime(timeFormat){
        return moment(timeFormat).format("HH:mm")
    }

    fileReadAndDetails(event: any) {
        var image = event.target.files;
        console.log(event.target.files)
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (data) => {
            this.URLBase64 = data.target.result;
        }
        return {
            fileData: image,
            URLBase64: this.URLBase64
        }
    }

    getCountries(){
        return this.http.get('https://trial.mobiscroll.com/content/countries.json')
    }
    // ***********Search Session For User Moduel *****************/
    getUserSearchkeyWord() {
        let UserModuleSearchKeyWord: userSearchKeyWord;
        UserModuleSearchKeyWord = JSON.parse(localStorage.getItem("userSearch"));
        return UserModuleSearchKeyWord
    }

    setUserSearchKeyWord(keyWord: userSearchKeyWord) {
        let payload = {
            displayName: keyWord.displayName,
            firstName: keyWord.firstName,
            lastName: keyWord.lastName,
            email: keyWord.email
        }
        localStorage.setItem("userSearch", JSON.stringify(payload))
    }

    setMovieSerachWord(keyWord: MovieSearchKeyWord) {
        let payload = {
            id: keyWord.id,
            title: keyWord.title,
            director: keyWord.director,
            releaseYear: keyWord.releaseYear,
            length: keyWord.length
        }
        localStorage.setItem("movieSearch", JSON.stringify(payload))
    }
    getMovieSearchWord() {
        let UserModuleSearchKeyWord: MovieSearchKeyWord;
        UserModuleSearchKeyWord = JSON.parse(localStorage.getItem("movieSearch"));
        return UserModuleSearchKeyWord
    }
}