import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactIdService {
  private _id:number=0;

  constructor() { }

  newId(lastid:number): number {
    this._id = lastid+1;
    return this._id;
  }
  get lastId():number{
    return this._id;
  }



}
