import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePluginsComponent } from './create-plugins.component';

describe('CreatePluginsComponent', () => {
  let component: CreatePluginsComponent;
  let fixture: ComponentFixture<CreatePluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePluginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
