import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-contacts',
  template: `
      <h4>{{ numberOfContacts }}</h4>
      <ul>
        <li>{{ contact.firstName | titlecase}} {{ contact.lastName| uppercase}} - {{ contact.email | lowercase}}</li>
        <li>{{ contact2.firstName | titlecase}} {{ contact2.lastName| uppercase}} - {{ contact2.email | lowercase}}</li>
        <li>{{ contact3.firstName | titlecase}} {{ contact3.lastName| uppercase}} - {{ contact3.email | lowercase}}</li>
      </ul>
      <cnt-contact></cnt-contact>
    
     
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor() { }
  numberOfContacts = 3;
  contact = {
    firstName: 'Jack', lastName: 'Bauer',
    email: 'jack.bauer@fbi.com'
  };
  contact2 = {
    firstName: 'Jack', lastName: 'lang',
    email: 'jack.lang@fbi.com'
  };
  contact3 = {
    firstName: 'Jack', lastName: 'ichan',
    email: 'jack.ichan@fbi.com'
  };

  ngOnInit(): void {
  }

}
