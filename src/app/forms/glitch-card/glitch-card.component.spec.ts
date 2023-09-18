import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchCardComponent } from './glitch-card.component';

describe('GlitchCardComponent', () => {
  let component: GlitchCardComponent;
  let fixture: ComponentFixture<GlitchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlitchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlitchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
