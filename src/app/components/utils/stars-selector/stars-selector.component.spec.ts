import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsSelectorComponent } from './stars-selector.component';

describe('StarsSelectorComponent', () => {
  let component: StarsSelectorComponent;
  let fixture: ComponentFixture<StarsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarsSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
