import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcarsxrutComponent } from './allcarsxrut.component';

describe('AllcarsxrutComponent', () => {
  let component: AllcarsxrutComponent;
  let fixture: ComponentFixture<AllcarsxrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcarsxrutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcarsxrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
