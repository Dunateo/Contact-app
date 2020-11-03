import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <h4>{{ numberOfContacts }}</h4>
      <form>
        <ul>
          <li>{{ contact.firstName | titlecase}} {{ contact.lastName| uppercase}} - {{ contact.email | lowercase}}
            <input type="radio" id="contact" name="drone" value="huey" >
          </li>
          <li>{{ contact2.firstName | titlecase}} {{ contact2.lastName| uppercase}} - {{ contact2.email | lowercase}}
            <input type="radio" id="contact2" name="drone" value="huey" >
          </li>
          <li>{{ contact3.firstName | titlecase}} {{ contact3.lastName| uppercase}} - {{ contact3.email | lowercase}}
            <input type="radio" id="contact3" name="drone" value="huey" >
          </li>
        </ul>
      </form>
      
      <cnt-contact></cnt-contact>
    
     
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
