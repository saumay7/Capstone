import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {

  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text:string = 'Submit';
  @Input()
  bgColor = 'purple';
  @Input()
  color = 'gold';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 12;
  @Output()
  onClick = new EventEmitter(); // it will emitt the button click in the login component
  constructor() { }

  ngOnInit(): void {
  }

}
