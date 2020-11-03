import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-contacts',
  template: `
      <h4>{{ numberOfContacts }}</h4>
      <ul>
        <li>{{ contact.firstName }} {{ contact.lastName}} - {{ contact.email }}</li>
        <li>{{ contact2.firstName }} {{ contact2.lastName}} - {{ contact2.email }}</li>
        <li>{{ contact3.firstName }} {{ contact3.lastName}} - {{ contact3.email }}</li>
      </ul>
    
     
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
