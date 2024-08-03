import { Injectable } from '@angular/core';
import { client } from './sanity-client';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getPortableTextContent(slug: string): Observable<any> {
    return from(
      client.fetch(`*[_type == "post" && slug.current == $slug][0].content`, {
        slug,
      })
    );
  }
}
