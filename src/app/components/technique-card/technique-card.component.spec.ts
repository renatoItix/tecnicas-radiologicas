import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueCardComponent } from './technique-card.component';

describe('TechniqueCardComponent', () => {
  let component: TechniqueCardComponent;
  let fixture: ComponentFixture<TechniqueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniqueCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
