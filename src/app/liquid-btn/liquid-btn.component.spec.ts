import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidBtnComponent } from './liquid-btn.component';

describe('LiquidBtnComponent', () => {
  let component: LiquidBtnComponent;
  let fixture: ComponentFixture<LiquidBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
