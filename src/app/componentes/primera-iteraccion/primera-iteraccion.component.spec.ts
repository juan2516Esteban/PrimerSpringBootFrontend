import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraIteraccionComponent } from './primera-iteraccion.component';

describe('PrimeraIteraccionComponent', () => {
  let component: PrimeraIteraccionComponent;
  let fixture: ComponentFixture<PrimeraIteraccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeraIteraccionComponent]
    });
    fixture = TestBed.createComponent(PrimeraIteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
