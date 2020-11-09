import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
