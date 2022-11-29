import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm! : FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder: FormBuilder, private userService:UserService , private activatedRoute: ActivatedRoute,
  private router: Router ){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]], //email is required
      password:['',Validators.required]//password is required

    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;//? returnUrl =/checkout
//snapshot is the latest value of the url
  }
  get fc()
  {
    return this.loginForm.controls;
  }
  submit()
  {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService.login({email:this.fc.email.value, password: this.fc.password.value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }

}
