import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent {
  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text: string = 'Submit';
  @Input()
  color = 'white';
  @Input()
  fontSizeEm = 1.3;
  @Input()
  widthEm = 12;
  @Output()
  onClick = new EventEmitter();
}
