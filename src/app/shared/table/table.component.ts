import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipe/capitalize';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    CapitalizePipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges {
 @Input() childrenData: Creditur[] = []
 @Output() buttonEmiter = new EventEmitter<string>();
 date: Date = new Date()

 ngOnChanges(changes: SimpleChanges) {
  if (changes['childrenData']) {
    console.log('data updated', this.childrenData);
    // render ulang atau proses data jika perlu
  }
}

 sendToParent() {
  this.buttonEmiter.emit(this.childrenData[0].name = 'fariz')
  console.log('ini data dari childrem')
 }
}
