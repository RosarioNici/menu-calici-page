import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostriDrinkComponent } from './nostri-drink.component';

describe('NostriDrinkComponent', () => {
  let component: NostriDrinkComponent;
  let fixture: ComponentFixture<NostriDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NostriDrinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NostriDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
