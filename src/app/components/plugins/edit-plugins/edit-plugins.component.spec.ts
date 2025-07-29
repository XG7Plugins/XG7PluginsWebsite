import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPluginsComponent } from './edit-plugins.component';

describe('EditPluginsComponent', () => {
  let component: EditPluginsComponent;
  let fixture: ComponentFixture<EditPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPluginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
