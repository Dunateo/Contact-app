import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact',
  template: `
    <li>{{ contact.firstName | titlecase}} {{ contact.lastName| uppercase}} - {{ contact.email | lowercase}}</li>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  @Input() contact:Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
