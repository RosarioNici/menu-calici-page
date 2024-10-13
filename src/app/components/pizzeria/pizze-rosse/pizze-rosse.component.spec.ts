import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeRosseComponent } from './pizze-rosse.component';

describe('PizzeRosseComponent', () => {
  let component: PizzeRosseComponent;
  let fixture: ComponentFixture<PizzeRosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzeRosseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeRosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
