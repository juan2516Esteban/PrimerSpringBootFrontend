import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRickComponent } from './info-rick.component';

describe('InfoRickComponent', () => {
  let component: InfoRickComponent;
  let fixture: ComponentFixture<InfoRickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRickComponent]
    });
    fixture = TestBed.createComponent(InfoRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
