import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePluginsComponent } from './update-plugins.component';

describe('UpdatePluginsComponent', () => {
  let component: UpdatePluginsComponent;
  let fixture: ComponentFixture<UpdatePluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePluginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
