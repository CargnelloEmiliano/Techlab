import { Component } from '@angular/core';
import { Router } from '@angular/router';

// * Interfaces
import { ISections } from 'src/app/core/models/sections.interface';

// * Services
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent {

  public sections: ISections[] = []
  constructor(private _fireBase: FirebaseService,
    private _userService: UserService,
    private router: Router){}

  ngOnInit(){
    this._fireBase.get('sections').subscribe((res) => {
      this.sections = res;
    })
  }

  action(element: string){
    if(element == 'logout'){
      this.router.navigateByUrl('login')
      this._userService.logout()
    }
  } 
}
