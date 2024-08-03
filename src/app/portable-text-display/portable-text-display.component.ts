import { Component, inject } from '@angular/core';
import { PortableTextComponent } from '@limitless-angular/sanity';
import { ContentService } from '../content.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-portable-text-display',
  standalone: true,
  imports: [PortableTextComponent],
  template: `
    @if (portableTextContent(); as content) {
      <div portable-text [value]="content"></div>
    } @else {
      <p>Hold on, content's loading...</p>
    }
  `,
})
export class PortableTextDisplayComponent {
  portableTextContent = toSignal(
    inject(ContentService).getPortableTextContent('lorem-ipsum')
  );
}
