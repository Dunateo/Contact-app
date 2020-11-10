import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'cnt-contacts',
  template: `
    <form (ngSubmit)="closeForm()">
      <label for="first">Firstname</label>
      <input id="first" name="first" type="text" [(ngModel)]="selectedContact.firstName"
             *ngIf="!!selectedContact" [value]="selectedContact.firstName">
      <input id="first" name="first" type="text" [(ngModel)]="addContact.firstName" *ngIf="!selectedContact">

      <label for="last">Lastname</label>
      <input id="last" name="last" type="text" [(ngModel)]="selectedContact.lastName"
             *ngIf="!!selectedContact" [value]="selectedContact.lastName">
      <input id="last" name="last" type="text" [(ngModel)]="addContact.lastName" *ngIf="!selectedContact">

      <label for="mail">Email</label>
      <input id="mail" name="mail" type="email" [(ngModel)]="selectedContact.email"
             *ngIf="!!selectedContact" [value]="selectedContact.email">
      <input id="mail" name="mail" type="email" [(ngModel)]="addContact.email" *ngIf="!selectedContact">

      <button (click)="add()">Add
      </button>
    </form>

    <button *ngIf="!!selectedContact">Edit</button>
    <button *ngIf="!!selectedContact"
            (click)="delete()">Delete
    </button>

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

  selectedContact: Contact =null;
  constructor(private contactService: ContactsService) {

  }

  //definition des variables
  addContact: Contact =this.contactService.videContact;
  contactArray:Contact[] = this.contactService.contactArray;
  numberOfContacts = this.contactService.numberOfContacts;

  ngOnInit(): void {
  }

  add(){
    this.contactArray = this.contactService.addForm(this.addContact);
    this.numberOfContacts = this.contactService.numberOfContacts
  }
  delete(){
    this.numberOfContacts = this.contactService.deleteContact(this.selectedContact)
  }

  selectContact(contact:Contact){
    if (this.selectedContact === contact){
      this.selectedContact = null;
    }else {
      this.selectedContact = contact;
    }
  }

  closeForm() {
    this.selectedContact = null;
    this.addContact = this.contactService.videContact;
  }



}
