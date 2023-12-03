import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCardComponent } from './libro-card.component';

describe('LibroCardComponent', () => {
  let component: LibroCardComponent;
  let fixture: ComponentFixture<LibroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroCardComponent]
    });
    fixture = TestBed.createComponent(LibroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
