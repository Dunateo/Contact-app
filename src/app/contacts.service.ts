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

  private _numberOfContacts = this.contactArray.length;
  constructor() { }

  deleteContact(currentC:Contact){
    for (let i = 0; i<this._numberOfContacts; i++){
      if (this.contactArray[i].id === currentC.id){
        this.contactArray.splice(i);
        this._numberOfContacts = this._numberOfContacts-1;
        return this._numberOfContacts;
      }
    }

  }

  addForm(newC:Contact) {
    const newContact:Contact = {
      id: this.contactArray[this.numberOfContacts-1].id + 1,
      firstName: newC.firstName,
      lastName:newC.lastName,
      email: newC.email
    };
    this.numberOfContacts = this.numberOfContacts+1;
    this.contactArray.push(newContact);
    return this.contactArray;
  }
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
  get numberOfContacts(): number {
    return this._numberOfContacts;
  }

  set numberOfContacts(value: number) {
    this._numberOfContacts = value;
  }

}
