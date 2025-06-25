import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
 @Input() childrenData: Creditur[] = []
 @Output() buttonEmiter = new EventEmitter<string>();

 sendToParent() {
  this.buttonEmiter.emit(this.childrenData[0].name = 'fariz')
  console.log('ini data dari childrem')
 }
}
