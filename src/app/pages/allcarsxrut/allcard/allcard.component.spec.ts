import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcardComponent } from './allcard.component';

describe('AllcardComponent', () => {
  let component: AllcardComponent;
  let fixture: ComponentFixture<AllcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
