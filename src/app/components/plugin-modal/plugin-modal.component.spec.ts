import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginModalComponent } from './plugin-modal.component';

describe('PluginModalComponent', () => {
  let component: PluginModalComponent;
  let fixture: ComponentFixture<PluginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
