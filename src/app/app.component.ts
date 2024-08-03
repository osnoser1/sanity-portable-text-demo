import { Component } from '@angular/core';
import { PortableTextDisplayComponent } from './portable-text-display/portable-text-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortableTextDisplayComponent],
  template: `
    <h1>Check Out This Sanity Portable Text Magic!</h1>
    <app-portable-text-display />
  `,
})
export class AppComponent {
  title = 'sanity-portable-text-demo';
}
