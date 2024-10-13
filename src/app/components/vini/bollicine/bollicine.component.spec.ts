import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollicineComponent } from './bollicine.component';

describe('BollicineComponent', () => {
  let component: BollicineComponent;
  let fixture: ComponentFixture<BollicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BollicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
