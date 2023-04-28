import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import {CommonService} from 'src/app/_services/common';
import { MoviesService } from 'src/app/_services/movies.service';
import {QuibService } from 'src/app/_services/Quib.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  showPassword:boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService : AuthenticationService,
    private router: Router,
    private toastr: ToastrMsgService,
    private CommonService: CommonService,
    private MoviesService: MoviesService,
    private QuibService: QuibService,
  ) {
    this.form = this.fb.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
   }

   onSubmit () {
		const { email, password } = this.form.value;
		this.authenticationService.login({
            email: email,
            password: password
        }).subscribe(res => {
          console.log(res)
          if(res.errors){
            this.router.navigateByUrl("/login");
            this.toastr.showError("Login failed", "Login");
          }
          else {
            localStorage.setItem('token', res.token);
            this.MoviesService.MovieSearchKeyWord.next(this.CommonService.getMovieSearchWord());
            this.QuibService.SearchKeyWord.next(this.CommonService.getUserSearchkeyWord());
            this.router.navigateByUrl("/dashboard");
            localStorage.setItem('UserData', JSON.stringify(res['body']['data']));
            let email = localStorage.getItem('email');
            this.toastr.showSuccess("Login Success", "Login");
          }
        }); 
	}

  ngOnInit(): void {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
