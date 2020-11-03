import { Component } from '@angular/core';

@Component({
  selector: 'cnt-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <h2>on est sur la page d'acceuil la </h2>
      <cnt-contacts></cnt-contacts>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'Contacts';
}
