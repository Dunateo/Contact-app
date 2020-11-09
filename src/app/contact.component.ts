import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact',
  template: `
    <li>
      <span [class.selected]="selected">
        {{ contact.firstName | titlecase}} {{ contact.lastName| uppercase}} - {{ contact.email | lowercase}}
      </span>
    </li>
  `,
  styles: [
      'span.selected{background: lightcoral}'
  ]
})
export class ContactComponent implements OnInit {
  @Input() contact:Contact;
  @Input() selected:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
