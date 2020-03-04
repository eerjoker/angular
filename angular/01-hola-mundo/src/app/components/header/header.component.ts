import { Component } from '@angular/core'; // importo el decorador Component

@Component({
  selector: 'app-header',
  //template: `<h1>Header component</h1>` // si el html es muy simple (hasta 4 líneas) se hace un template para evitar crear un archivo HTML
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
