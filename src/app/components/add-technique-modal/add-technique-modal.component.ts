import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-technique-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-technique-modal.component.html',
  styleUrls: ['./add-technique-modal.component.scss']
})
export class AddTechniqueModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  
  newTechnique = {
    name: '',
    category: 'torax',
    kV: 0,
    mAs: 0,
    mA: 0,
    distance: 0
  };

  onSave() {
    this.save.emit(this.newTechnique);
  }

  onClose() {
    this.close.emit();
  }
}