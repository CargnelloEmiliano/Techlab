import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _fireStore: Firestore) { }

  public get(url: string): Observable<any>{
    const ref = collection(this._fireStore, url)
    return collectionData(ref, { idField: 'id'}) as Observable<any>
  }
}
