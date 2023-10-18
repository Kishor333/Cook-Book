import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-modal',
    templateUrl: './dynamic-modal.component.html',
    styleUrls: ['./dynamic-modal.component.scss']
  })
export class DynamicModalComponent implements OnInit {

    @Input() message:string | null = null;
    @Output() isClose = new EventEmitter<void>();

    constructor(){}
    ngOnInit(): void {
        
    }

    onClose() {
        this.isClose.emit();
    }
}