import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <h4>Nb Contact: {{ numberOfContacts }}</h4>
      <form>
        <ul>
          <cnt-contact [contact]="contact"></cnt-contact>
          <cnt-contact [contact]="contact2"></cnt-contact>
          <cnt-contact [contact]="contact3"></cnt-contact>
          <li>{{ contact.firstName | titlecase}} {{ contact.lastName| uppercase}} - {{ contact.email | lowercase}}
            <input type="radio" id="contact" name="drone" value="huey" >
          </li>
        </ul>
      </form>
    
     
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  numberOfContacts = 3;
  contact:Contact = {
    id:0,
    firstName: 'Jack', lastName: 'Bauer',
    email: 'jack.bauer@fbi.com'
  };
  contact2:Contact = {
    id:1,
    firstName: 'Jack', lastName: 'lang',
    email: 'jack.lang@fbi.com'
  };
  contact3:Contact = {
    id:2,
    firstName: 'Jack', lastName: 'ichan',
    email: 'jack.ichan@fbi.com'
  };

  ngOnInit(): void {
  }

}
