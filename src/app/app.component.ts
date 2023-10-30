import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// * Services
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'techlab';
  public isLogged: boolean = false;

  constructor(private _userService: UserService,
    private router: Router){}

  ngOnInit(){
    this._userService.isAuthenticated().subscribe((res)=>{
      if(res){
        this.router.navigateByUrl('/home')
        this.isLogged = res;
      }
    })
  }
}
