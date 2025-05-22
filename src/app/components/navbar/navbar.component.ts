import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechniqueMenuItem {
  id: string;
  name: string;
}

interface TechniqueCategories {
  torax: TechniqueMenuItem[];
  'membros-superiores': TechniqueMenuItem[];
  'membros-inferiores': TechniqueMenuItem[];
  coluna: TechniqueMenuItem[];
  abdome: TechniqueMenuItem[];
  bacia: TechniqueMenuItem[];
  especialidades: TechniqueMenuItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() currentTechnique: string | null = null;
  @Output() techniqueSelected = new EventEmitter<string>();
  
  openSubmenu: string | null = 'torax';
  
  techniques: TechniqueCategories = {
    torax: [
      { id: 'torax-pa', name: 'PA' },
      { id: 'torax-perfil', name: 'Perfil' },
      { id: 'torax-ap-deitado', name: 'AP Deitado' },
      { id: 'torax-ap-semi-ereto', name: 'AP Semi-Ereto' },
      { id: 'torax-ap-obliqua', name: 'AP Oblíqua' }
    ],
    'membros-superiores': [
      { id: 'mao-ap', name: 'Mão - AP' },
      { id: 'mao-obliqua', name: 'Mão - Oblíqua' },
      { id: 'mao-lateral', name: 'Mão - Lateral' },
      { id: 'punho-ap', name: 'Punho - AP' },
      { id: 'punho-perfil', name: 'Punho - Perfil' },
      { id: 'antebraco-ap', name: 'Antebraço - AP' },
      { id: 'antebraco-perfil', name: 'Antebraço - Perfil' },
      { id: 'cotovelo-ap', name: 'Cotovelo - AP' },
      { id: 'cotovelo-lateral', name: 'Cotovelo - Lateral' },
      { id: 'braco-ap', name: 'Braço - AP' },
      { id: 'braco-perfil', name: 'Braço - Perfil' },
      { id: 'ombro-ap', name: 'Ombro - AP' },
      { id: 'ombro-axial', name: 'Ombro - Axial' }
    ],
    'membros-inferiores': [
      { id: 'pe-ap', name: 'Pé - AP' },
      { id: 'pe-obliqua', name: 'Pé - Oblíqua' },
      { id: 'pe-lateral', name: 'Pé - Lateral' },
      { id: 'tornozelo-ap', name: 'Tornozelo - AP' },
      { id: 'tornozelo-perfil', name: 'Tornozelo - Perfil' },
      { id: 'perna-ap', name: 'Perna - AP' },
      { id: 'perna-perfil', name: 'Perna - Perfil' },
      { id: 'joelho-ap', name: 'Joelho - AP' },
      { id: 'joelho-perfil', name: 'Joelho - Perfil' },
      { id: 'femur-ap', name: 'Fêmur - AP' },
      { id: 'femur-perfil', name: 'Fêmur - Perfil' }
    ],
    coluna: [
      { id: 'cervical-ap', name: 'Cervical - AP' },
      { id: 'cervical-perfil', name: 'Cervical - Perfil' },
      { id: 'toracica-ap', name: 'Torácica - AP' },
      { id: 'toracica-perfil', name: 'Torácica - Perfil' },
      { id: 'lombar-ap', name: 'Lombar - AP' },
      { id: 'lombar-perfil', name: 'Lombar - Perfil' },
      { id: 'sacro-ap', name: 'Sacro - AP' }
    ],
    abdome: [
      { id: 'abdome-ap', name: 'Abdome - AP' },
      { id: 'abdome-perfil', name: 'Abdome - Perfil' },
      { id: 'abdome-em-pe', name: 'Abdome - Em Pé' }
    ],
    bacia: [
      { id: 'bacia-ap', name: 'Bacia - AP' },
      { id: 'bacia-perfil', name: 'Bacia - Perfil' }
    ],
    especialidades: [
      { id: 'mamografia-cc', name: 'Mamografia - CC' },
      { id: 'mamografia-mlo', name: 'Mamografia - MLO' }
    ]
  };

  toggleSubmenu(section: keyof TechniqueCategories) {
    this.openSubmenu = this.openSubmenu === section ? null : section;
  }

  selectTechnique(techniqueId: string) {
    this.techniqueSelected.emit(techniqueId);
  }
}