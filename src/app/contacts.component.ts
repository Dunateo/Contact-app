import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <form>
        <label for="first">Firstname</label>
        <input id="first" type="text">
        
        <label for="last">Lastname</label>
        <input id="last" type="text">
        
        <label for="mail">Email</label>
        <input id="mail" type="email">
        <button>Add</button>
      </form>
      
      <button>Edit</button>
      <button (click)="deleteContact()">Delete</button>
      <h4>Nb Contact: {{ numberOfContacts }}</h4>
        <ul>
          <cnt-contact  
                        *ngFor="let contact of contactArray"
                        (click)="selectContact(contact)"
                        [contact]="contact"
                        [selected]="selectedContact === contact"></cnt-contact>
        </ul>
      
      
    
     
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;

  constructor() { }

  numberOfContacts = 3;
  contactArray:Contact[] =[{
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


  ngOnInit(): void {
  }
  deleteContact(){
    let id:number;
    for (let i = 0; i<this.numberOfContacts; i++){
      if (this.contactArray[i].id === this.selectedContact.id){
        this.contactArray.splice(i);
        this.numberOfContacts = this.numberOfContacts-1;
        return true;
      }
    }

  }
  selectContact(contact:Contact){
    if (this.selectedContact === contact){
      this.selectedContact = null;
    }else {
      this.selectedContact = contact;
    }

  }
}
