import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() techniqueSelected = new EventEmitter<string>();
  
  openSubmenu: string | null = 'torax';
  
  techniques: {[key: string]: any[]} = {
    'torax': [
      { id: 'torax-pa', name: 'PA' },
      { id: 'torax-perfil', name: 'Perfil' }
    ]
  };

  toggleSubmenu(section: string) {
    this.openSubmenu = this.openSubmenu === section ? null : section;
  }

  selectTechnique(techniqueId: string) {
    this.techniqueSelected.emit(techniqueId);
  }
}