import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampagneComponent } from './champagne.component';

describe('ChampagneComponent', () => {
  let component: ChampagneComponent;
  let fixture: ComponentFixture<ChampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampagneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
