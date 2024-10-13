import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContorniComponent } from './contorni.component';

describe('ContorniComponent', () => {
  let component: ContorniComponent;
  let fixture: ComponentFixture<ContorniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContorniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContorniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
