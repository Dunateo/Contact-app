import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact-detail',
  template: `
   <ul>
     <li>Firstname: {{ contact.firstName | titlecase}}</li>
     <li>Lastname: {{ contact.lastName| uppercase}}</li>
     <li>Email: {{ contact.email | lowercase}}</li>
   </ul>
  `,
  styles: [
  ]
})
export class ContactDetailComponent implements OnInit {
  @Input() contact:Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
