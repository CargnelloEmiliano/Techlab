import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// * Validators.
import {
  getErrorMessage, isAlphanumericWithSpaces, notOnlySpaces,
} from 'src/app/core/validators/character.validator';

// * Services
import { UserService } from 'src/app/core/services/user.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  public errMessage = getErrorMessage;

  formGroup: FormGroup;
  constructor(private userService: UserService,
              private utilService: UtilService,
              private router: Router){
                
    this.formGroup = new FormGroup({
      email: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        notOnlySpaces(),
      ])
      ),
      password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          notOnlySpaces(),
          isAlphanumericWithSpaces()
        ])
      )
    })
  }
  
  onSubmit(){
    this.userService.register(this.formGroup.value)
    .then(res => {
      if(res){
        this.utilService.notification('Registro con exito!', 'success', 5000)
        this.router.navigate(['login'])
      }
    })
    .catch(err => {
      this.utilService.notification(err, 'error', 5000)
      this.formGroup.markAllAsTouched()
    })
  }
}
