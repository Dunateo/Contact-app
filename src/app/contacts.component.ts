import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <form (ngSubmit)="closeForm()">
        <label for="first">Firstname</label>
        <input id="first" name="first" type="text"  [(ngModel)]="selectedContact.firstName" 
               *ngIf="!!selectedContact" [value]="selectedContact.firstName">
        <input id="first" name="first" type="text" [(ngModel)]="addContact.firstName" *ngIf="!selectedContact">
        
        <label for="last">Lastname</label>
        <input id="last" name="last" type="text" [(ngModel)]="selectedContact.lastName" 
               *ngIf="!!selectedContact" [value]="selectedContact.lastName">
        <input id="last" name="last" type="text" [(ngModel)]="addContact.lastName" *ngIf="!selectedContact" >
        
        <label for="mail">Email</label>
        <input id="mail" name="mail" type="email"  [(ngModel)]="selectedContact.email" 
               *ngIf="!!selectedContact" [value]="selectedContact.email">
        <input id="mail" name="mail" type="email" [(ngModel)]="addContact.email" *ngIf="!selectedContact">
        <button (click)="addForm()">Add</button>
      </form>
      
      <button *ngIf="!!selectedContact" >Edit</button>
      <button *ngIf="!!selectedContact" (click)="deleteContact()">Delete</button>
      
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
  addContact: Contact ={
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  };
  constructor() { }


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
  numberOfContacts = this.contactArray.length;

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

  closeForm() {
    this.selectedContact = null;
    this.addContact = {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  addForm() {
    const newContact:Contact = {
      id: this.contactArray[this.numberOfContacts-1].id + 1,
      firstName: this.addContact.firstName,
      lastName:this.addContact.lastName,
      email: this.addContact.email
    };
    this.numberOfContacts = this.numberOfContacts+1;
    this.contactArray.push(newContact);
  }
}
