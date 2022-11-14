import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultasComponent } from './multas.component';

describe('MultasComponent', () => {
  let component: MultasComponent;
  let fixture: ComponentFixture<MultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
