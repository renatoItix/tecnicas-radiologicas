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
    { id: 'torax-perfil', name: 'Perfil', category: 'torax', kV: 125, mAs: 3.2, mA: 100, distance: 180, fullName: 'Tórax - Perfil' },
    { id: 'torax-ap-deitado', name: 'AP Deitado', category: 'torax', kV: 110, mAs: 3.5, mA: 100, distance: 180, fullName: 'Tórax - AP Deitado' },
    { id: 'torax-ap-semi-ereto', name: 'AP Semi-Ereto', category: 'torax', kV: 115, mAs: 3.0, mA: 100, distance: 180, fullName: 'Tórax - AP Semi-Ereto' },
    { id: 'torax-ap-obliqua', name: 'AP Oblíqua', category: 'torax', kV: 120, mAs: 3.2, mA: 100, distance: 180, fullName: 'Tórax - AP Oblíqua' }
  ],
  'membros-superiores': [
    { id: 'mao-ap', name: 'Mão - AP', category: 'membros-superiores', kV: 50, mAs: 1.2, mA: 100, distance: 100, fullName: 'Mão - AP' },
    { id: 'mao-obliqua', name: 'Mão - Oblíqua', category: 'membros-superiores', kV: 50, mAs: 1.5, mA: 100, distance: 100, fullName: 'Mão - Oblíqua' },
    { id: 'mao-lateral', name: 'Mão - Lateral', category: 'membros-superiores', kV: 50, mAs: 1.8, mA: 100, distance: 100, fullName: 'Mão - Lateral' },
    { id: 'punho-ap', name: 'Punho - AP', category: 'membros-superiores', kV: 55, mAs: 1.5, mA: 100, distance: 100, fullName: 'Punho - AP' },
    { id: 'punho-perfil', name: 'Punho - Perfil', category: 'membros-superiores', kV: 55, mAs: 1.8, mA: 100, distance: 100, fullName: 'Punho - Perfil' },
    { id: 'antebraco-ap', name: 'Antebraço - AP', category: 'membros-superiores', kV: 60, mAs: 2.5, mA: 100, distance: 100, fullName: 'Antebraço - AP' },
    { id: 'antebraco-perfil', name: 'Antebraço - Perfil', category: 'membros-superiores', kV: 60, mAs: 3.0, mA: 100, distance: 100, fullName: 'Antebraço - Perfil' },
    { id: 'cotovelo-ap', name: 'Cotovelo - AP', category: 'membros-superiores', kV: 60, mAs: 2.5, mA: 100, distance: 100, fullName: 'Cotovelo - AP' },
    { id: 'cotovelo-lateral', name: 'Cotovelo - Lateral', category: 'membros-superiores', kV: 60, mAs: 3.0, mA: 100, distance: 100, fullName: 'Cotovelo - Lateral' },
    { id: 'braco-ap', name: 'Braço - AP', category: 'membros-superiores', kV: 65, mAs: 3.2, mA: 100, distance: 100, fullName: 'Braço - AP' },
    { id: 'braco-perfil', name: 'Braço - Perfil', category: 'membros-superiores', kV: 65, mAs: 3.5, mA: 100, distance: 100, fullName: 'Braço - Perfil' },
    { id: 'ombro-ap', name: 'Ombro - AP', category: 'membros-superiores', kV: 70, mAs: 4.0, mA: 100, distance: 100, fullName: 'Ombro - AP' },
    { id: 'ombro-axial', name: 'Ombro - Axial', category: 'membros-superiores', kV: 70, mAs: 4.5, mA: 100, distance: 100, fullName: 'Ombro - Axial' }
  ],
  'membros-inferiores': [
    { id: 'pe-ap', name: 'Pé - AP', category: 'membros-inferiores', kV: 55, mAs: 2.5, mA: 100, distance: 100, fullName: 'Pé - AP' },
    { id: 'pe-obliqua', name: 'Pé - Oblíqua', category: 'membros-inferiores', kV: 55, mAs: 3.0, mA: 100, distance: 100, fullName: 'Pé - Oblíqua' },
    { id: 'pe-lateral', name: 'Pé - Lateral', category: 'membros-inferiores', kV: 55, mAs: 3.5, mA: 100, distance: 100, fullName: 'Pé - Lateral' },
    { id: 'tornozelo-ap', name: 'Tornozelo - AP', category: 'membros-inferiores', kV: 60, mAs: 3.0, mA: 100, distance: 100, fullName: 'Tornozelo - AP' },
    { id: 'tornozelo-perfil', name: 'Tornozelo - Perfil', category: 'membros-inferiores', kV: 60, mAs: 3.5, mA: 100, distance: 100, fullName: 'Tornozelo - Perfil' },
    { id: 'perna-ap', name: 'Perna - AP', category: 'membros-inferiores', kV: 65, mAs: 4.0, mA: 100, distance: 100, fullName: 'Perna - AP' },
    { id: 'perna-perfil', name: 'Perna - Perfil', category: 'membros-inferiores', kV: 65, mAs: 4.5, mA: 100, distance: 100, fullName: 'Perna - Perfil' },
    { id: 'joelho-ap', name: 'Joelho - AP', category: 'membros-inferiores', kV: 65, mAs: 5.0, mA: 100, distance: 100, fullName: 'Joelho - AP' },
    { id: 'joelho-perfil', name: 'Joelho - Perfil', category: 'membros-inferiores', kV: 65, mAs: 5.5, mA: 100, distance: 100, fullName: 'Joelho - Perfil' },
    { id: 'femur-ap', name: 'Fêmur - AP', category: 'membros-inferiores', kV: 70, mAs: 6.0, mA: 100, distance: 100, fullName: 'Fêmur - AP' },
    { id: 'femur-perfil', name: 'Fêmur - Perfil', category: 'membros-inferiores', kV: 70, mAs: 6.5, mA: 100, distance: 100, fullName: 'Fêmur - Perfil' }
  ],
  'coluna': [
    { id: 'cervical-ap', name: 'Cervical - AP', category: 'coluna', kV: 70, mAs: 8.0, mA: 100, distance: 100, fullName: 'Coluna Cervical - AP' },
    { id: 'cervical-perfil', name: 'Cervical - Perfil', category: 'coluna', kV: 70, mAs: 8.0, mA: 100, distance: 100, fullName: 'Coluna Cervical - Perfil' },
    { id: 'toracica-ap', name: 'Torácica - AP', category: 'coluna', kV: 80, mAs: 12.0, mA: 100, distance: 100, fullName: 'Coluna Torácica - AP' },
    { id: 'toracica-perfil', name: 'Torácica - Perfil', category: 'coluna', kV: 80, mAs: 12.0, mA: 100, distance: 100, fullName: 'Coluna Torácica - Perfil' },
    { id: 'lombar-ap', name: 'Lombar - AP', category: 'coluna', kV: 85, mAs: 15.0, mA: 100, distance: 100, fullName: 'Coluna Lombar - AP' },
    { id: 'lombar-perfil', name: 'Lombar - Perfil', category: 'coluna', kV: 85, mAs: 15.0, mA: 100, distance: 100, fullName: 'Coluna Lombar - Perfil' },
    { id: 'sacro-ap', name: 'Sacro - AP', category: 'coluna', kV: 80, mAs: 12.0, mA: 100, distance: 100, fullName: 'Sacro - AP' }
  ],
  'abdome': [
    { id: 'abdome-ap', name: 'Abdome - AP', category: 'abdome', kV: 80, mAs: 20.0, mA: 100, distance: 100, fullName: 'Abdome - AP' },
    { id: 'abdome-perfil', name: 'Abdome - Perfil', category: 'abdome', kV: 85, mAs: 25.0, mA: 100, distance: 100, fullName: 'Abdome - Perfil' },
    { id: 'abdome-em-pe', name: 'Abdome - Em Pé', category: 'abdome', kV: 85, mAs: 30.0, mA: 100, distance: 100, fullName: 'Abdome - Em Pé' }
  ],
  'bacia': [
    { id: 'bacia-ap', name: 'Bacia - AP', category: 'bacia', kV: 80, mAs: 20.0, mA: 100, distance: 100, fullName: 'Bacia - AP' },
    { id: 'bacia-perfil', name: 'Bacia - Perfil', category: 'bacia', kV: 85, mAs: 25.0, mA: 100, distance: 100, fullName: 'Bacia - Perfil' }
  ],
  'especialidades': [
    { id: 'mamografia-cc', name: 'Mamografia - CC', category: 'especialidades', kV: 28, mAs: 80, mA: 100, distance: 65, fullName: 'Mamografia - Crânio-Caudal' },
    { id: 'mamografia-mlo', name: 'Mamografia - MLO', category: 'especialidades', kV: 28, mAs: 80, mA: 100, distance: 65, fullName: 'Mamografia - MLO' }
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