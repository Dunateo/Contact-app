import { Injectable } from '@angular/core';
import {Contact} from "./Contact";

@Injectable({
  providedIn: 'root'
})

export class ContactsService {


  private _contactArray:Contact[] =[{
    id:0,
    firstName: 'Jack', lastName: 'Bauer',
    email: 'jack.bauer@fbi.com'
  },{
    id:1,
    firstName: 'Jack', lastName: 'lang',
    email: 'jack.lang@fbi.com'
  },{
    id:2,
    firstName: 'Jack', lastName: 'ichan',
    email: 'jack.ichan@fbi.com'
  } ];

  private _videContact:Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor() { }

  get contactArray(): Contact[] {
    return this._contactArray;
  }

  set contactArray(value: Contact[]) {
    this._contactArray = value;
  }
  get videContact(): Contact {
    return this._videContact;
  }

  set videContact(value: Contact) {
    this._videContact = value;
  }
}
