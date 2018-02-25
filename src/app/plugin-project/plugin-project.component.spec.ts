import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginProjectComponent } from './plugin-project.component';

describe('PluginProjectComponent', () => {
  let component: PluginProjectComponent;
  let fixture: ComponentFixture<PluginProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
