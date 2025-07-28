import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedComponent } from './affiliated.component';

describe('AffiliatedComponent', () => {
  let component: AffiliatedComponent;
  let fixture: ComponentFixture<AffiliatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
