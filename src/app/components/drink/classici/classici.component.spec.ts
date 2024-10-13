import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiciComponent } from './classici.component';

describe('ClassiciComponent', () => {
  let component: ClassiciComponent;
  let fixture: ComponentFixture<ClassiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassiciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
