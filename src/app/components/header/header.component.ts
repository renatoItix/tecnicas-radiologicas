import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTechniqueModalComponent } from '../add-technique-modal/add-technique-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AddTechniqueModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showAddTechniqueModal = false;

  // Método chamado quando clica no botão "Nova Técnica"
  onAddTechnique() {
    this.showAddTechniqueModal = true;
  }

  // Método para fechar o modal
  closeModal() {
    this.showAddTechniqueModal = false;
  }

  // Método para salvar a nova técnica
  saveTechnique(newTechnique: any) {
    console.log('Nova técnica adicionada:', newTechnique);
    // Aqui você pode adicionar a lógica para salvar no seu serviço
    this.closeModal();
  }
}