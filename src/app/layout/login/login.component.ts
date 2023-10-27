import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private userService: UserService){
    this.formGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  
  ngOnInit(): void {
      
  }

  onSubmit(){
    this.userService.register(this.formGroup)
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.log(err);
      
    })
  }
}
