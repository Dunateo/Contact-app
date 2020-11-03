import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <h4>Nb Contact: {{ numberOfContacts }}</h4>
      <form>
        <ul>
          <cnt-contact *ngFor="let contact of contactArray" [contact]="contact"></cnt-contact>
        </ul>
      </form>
    
     
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

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

}
