import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';

// * Services
import { UserService } from 'src/app/core/services/user.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  public formGroup: FormGroup;
  public isLogged: boolean = false;
  constructor(private _userService: UserService,
              private _utilService: UtilService){
    this.formGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
   this.login(this._userService.login(this.formGroup.value))
  }

  loginWithGoogle(){
    this.login(this._userService.loginWithGoogle())
  }

  private login(promise: Promise<UserCredential>){
    promise.then(res => {
      if(res){
        this._utilService.notification('Logeado correctamente!', 'success', 5000)
        this._userService.setAuthenticated(true)
      }
    })
    .catch(err => {
      this._userService.setAuthenticated(false)
      this._utilService.notification(err, 'error', 5000)
    })
  }
}
