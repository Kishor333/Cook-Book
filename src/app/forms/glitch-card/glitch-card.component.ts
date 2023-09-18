import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glitch-card',
  templateUrl: './glitch-card.component.html',
  styleUrls: ['./glitch-card.component.scss']
})
export class GlitchCardComponent implements OnInit {

  @Input() userData?:[] | any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.userData)
  }

}
