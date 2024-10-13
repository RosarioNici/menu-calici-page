import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitiviComponent } from './aperitivi.component';

describe('AperitiviComponent', () => {
  let component: AperitiviComponent;
  let fixture: ComponentFixture<AperitiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AperitiviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
