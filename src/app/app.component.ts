import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TechniqueCardComponent } from './components/technique-card/technique-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddTechniqueModalComponent } from './components/add-technique-modal/add-technique-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { TechniqueModel } from './models/technique.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    HeaderComponent,
    TechniqueCardComponent,
    FooterComponent,
    AddTechniqueModalComponent,
    ConfirmModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTechnique: TechniqueModel | null = null;
  showAddModal = false;
  showConfirmModal = false;
  confirmMessage = '';
  techniqueToDelete: string | null = null;
  
  techniques: {[key: string]: TechniqueModel[]} = {
    'torax': [
      { id: 'torax-pa', name: 'PA', category: 'torax', kV: 120, mAs: 2.5, mA: 100, distance: 180, fullName: 'Tórax - PA' },
      { id: 'torax-perfil', name: 'Perfil', category: 'torax', kV: 125, mAs: 3.2, mA: 100, distance: 180, fullName: 'Tórax - Perfil' }
    ]
  };

  ngOnInit() {
    if (this.techniques['torax'] && this.techniques['torax'].length > 0) {
      this.currentTechnique = this.techniques['torax'][0];
    }
  }

  showTechnique(techniqueId: string) {
    for (const category in this.techniques) {
      const found = this.techniques[category].find(t => t.id === techniqueId);
      if (found) {
        this.currentTechnique = found;
        break;
      }
    }
  }

  openAddTechniqueModal() {
    this.showAddModal = true;
  }

  closeAddTechniqueModal() {
    this.showAddModal = false;
  }

  addNewTechnique(newTechnique: any) {
    const { name, category, kV, mAs, mA, distance } = newTechnique;
    const id = `${category}-${name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`;
    
    if (!this.techniques[category]) {
      this.techniques[category] = [];
    }
    
    const technique: TechniqueModel = {
      id,
      name: name.includes('-') ? name.split(' - ')[1] : name,
      category,
      kV,
      mAs,
      mA,
      distance,
      fullName: `${this.getCategoryName(category)} - ${name}`
    };
    
    this.techniques[category].push(technique);
    this.currentTechnique = technique;
    this.showAddModal = false;
  }

  onDeleteTechnique(technique: TechniqueModel) {
    this.techniqueToDelete = technique.id;
    this.confirmMessage = `Tem certeza que deseja excluir a técnica "${technique.fullName}"? Esta ação não pode ser desfeita.`;
    this.showConfirmModal = true;
  }

  confirmDelete() {
    if (this.techniqueToDelete) {
      for (const category in this.techniques) {
        this.techniques[category] = this.techniques[category].filter(t => t.id !== this.techniqueToDelete);
      }
      
      if (this.currentTechnique?.id === this.techniqueToDelete) {
        this.currentTechnique = this.techniques['torax'][0] || null;
      }
      
      this.techniqueToDelete = null;
      this.showConfirmModal = false;
    }
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
    this.techniqueToDelete = null;
  }

  getCategoryName(categoryKey: string): string {
    const categoryNames: {[key: string]: string} = {
      'torax': 'Tórax',
      'membros-superiores': 'Membros Superiores',
      'membros-inferiores': 'Membros Inferiores',
      'coluna': 'Coluna',
      'cranio': 'Crânio',
      'abdome': 'Abdome',
      'bacia': 'Bacia',
      'especialidades': 'Especialidades'
    };
    
    return categoryNames[categoryKey] || categoryKey;
  }
}