import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RossoComponent } from './rosso.component';

describe('RossoComponent', () => {
  let component: RossoComponent;
  let fixture: ComponentFixture<RossoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RossoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
