import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginpageComponent } from './pluginpage.component';

describe('PluginpageComponent', () => {
  let component: PluginpageComponent;
  let fixture: ComponentFixture<PluginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
