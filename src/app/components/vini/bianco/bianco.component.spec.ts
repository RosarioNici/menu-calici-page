import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiancoComponent } from './bianco.component';

describe('BiancoComponent', () => {
  let component: BiancoComponent;
  let fixture: ComponentFixture<BiancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiancoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
