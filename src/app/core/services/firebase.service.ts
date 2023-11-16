import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
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

  public add(dato: any, url: string){
    const ref = collection(this._fireStore, url)
    return addDoc(ref, dato)
  }

  public delete(name: string, url: any) {
    const placeDocRef = doc(this._fireStore, `${name}/${url}`)
    return deleteDoc(placeDocRef)
  }

  public edit(name: string, url: any, id: any) {
    const placeDocRef = doc(this._fireStore, name, id)
    return updateDoc(placeDocRef, url)
  }

}
