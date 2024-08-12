import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  provideSanityLoader,
  SanityImage,
} from '@limitless-angular/sanity/image-loader';
import { PortableTextTypeComponent } from '@limitless-angular/sanity/portabletext';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [SanityImage],
  template: `
    <img
      class="mx-auto"
      alt="Sanity Image"
      [width]="300"
      [height]="300"
      [sanityImage]="value()"
    />
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Project data taken from https://www.sanity.io/demos/studio
  providers: [
    provideSanityLoader({ projectId: 'vdr05tup', dataset: 'production' }),
  ],
})
export class ImageComponent extends PortableTextTypeComponent {}
