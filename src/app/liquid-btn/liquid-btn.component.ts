import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquid-btn',
  templateUrl: './liquid-btn.component.html',
  styleUrls: ['./liquid-btn.component.scss']
})
export class LiquidBtnComponent implements OnInit {

  @Input() label?:string;
  @Input() valid?:boolean = true;

  
  constructor() { }

  ngOnInit(): void {
  }

}
