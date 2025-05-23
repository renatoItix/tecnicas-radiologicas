import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TechniqueModel } from '../../models/technique.model';

@Component({
  selector: 'app-technique-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './technique-card.component.html',
  styleUrls: ['./technique-card.component.scss']
})
export class TechniqueCardComponent {
  @Input() technique: TechniqueModel | null = null;
  @Output() delete = new EventEmitter<TechniqueModel>();
  @ViewChild('kVInput') kVInput!: ElementRef<HTMLInputElement>;
  
  isEditing = false;
  originalValues: Partial<TechniqueModel> = {};

 toggleEdit() {
  if (!this.technique) return;

  if (!this.isEditing) {
    this.originalValues = {
      kV: this.technique.kV,
      mAs: this.technique.mAs,
      mA: this.technique.mA,
      distance: this.technique.distance
    };
  }
  this.isEditing = !this.isEditing; // Habilita os campos
  if (this.isEditing) {
    setTimeout(() => {
      this.kVInput.nativeElement.focus();
    });
  }
}

  saveChanges() {
    this.isEditing = false;
  }

  cancelEdit() {
    if (this.technique && this.originalValues) {
      this.technique.kV = this.originalValues.kV || 0;
      this.technique.mAs = this.originalValues.mAs || 0;
      this.technique.mA = this.originalValues.mA || 0;
      this.technique.distance = this.originalValues.distance || 0;
      this.isEditing = false;
    }
  }

  deleteTechnique() {
    if (this.technique) {
      this.delete.emit(this.technique);
    }
  }
}