import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPluginsComponent } from './your-plugins.component';

describe('YourPluginsComponent', () => {
  let component: YourPluginsComponent;
  let fixture: ComponentFixture<YourPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourPluginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
