import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 

interface Technique {
  name: string;
  category: string;
  kV: number | null;
  mAs: number | null;
  mA: number | null;
  distance: number | null;
}

@Component({
  selector: 'app-add-technique-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule], 
  templateUrl: './add-technique-modal.component.html',
  styleUrls: ['./add-technique-modal.component.scss']
})
export class AddTechniqueModalComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Technique>();
  @ViewChild('nameInput') nameInputRef!: ElementRef;

  categories = [
    { value: 'torax', label: 'Tórax' },
    { value: 'membros-superiores', label: 'Membros Superiores' },
    { value: 'membros-inferiores', label: 'Membros Inferiores' },
    { value: 'coluna', label: 'Coluna' },
    { value: 'cranio', label: 'Crânio' },
    { value: 'abdome', label: 'Abdome' },
    { value: 'bacia', label: 'Bacia' },
    { value: 'especialidades', label: 'Especialidades' }
  ];

  newTechnique: Technique = {
    name: '',
    category: 'torax',
    kV: null,
    mAs: null,
    mA: null,
    distance: null
  };

   ngAfterViewInit() {
    setTimeout(() => {
      this.nameInputRef?.nativeElement?.focus();
    });
  }

  onSave() {
    if (this.isFormValid()) {
      this.save.emit({ ...this.newTechnique });
    } else {
      this.showValidationError();
    }
  }

  private isFormValid(): boolean {
    return (
      this.newTechnique.name.trim() !== '' &&
      this.newTechnique.kV !== null &&
      this.newTechnique.mAs !== null &&
      this.newTechnique.mA !== null &&
      this.newTechnique.distance !== null
    );
  }

  private showValidationError() {
    const errorElement = document.querySelector('.validation-error');
    if (errorElement) {
      errorElement.classList.add('visible');
      setTimeout(() => errorElement.classList.remove('visible'), 3000);
    }
  }
}
