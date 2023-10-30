import { EventEmitter, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticatedEvent: EventEmitter<boolean> = new EventEmitter<boolean>(
    false
  );
  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    this.authenticatedEvent.next(false);
    return signOut(this.auth);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  setAuthenticated(value: boolean){
    this.authenticatedEvent.next(value)
  }

  isAuthenticated(){
    return this.authenticatedEvent;
  }

}
