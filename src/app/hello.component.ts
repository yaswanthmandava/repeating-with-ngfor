import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <ul>
      <li *ngFor="let photo of photos">
        <p>{{ photo.title }}</p>
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() photos;
}
