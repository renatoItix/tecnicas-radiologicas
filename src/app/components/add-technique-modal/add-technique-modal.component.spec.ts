import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechniqueModalComponent } from './add-technique-modal.component';

describe('AddTechniqueModalComponent', () => {
  let component: AddTechniqueModalComponent;
  let fixture: ComponentFixture<AddTechniqueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTechniqueModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTechniqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
