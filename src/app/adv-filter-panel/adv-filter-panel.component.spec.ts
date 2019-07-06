import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvFilterPanelComponent } from './adv-filter-panel.component';

describe('AdvFilterPanelComponent', () => {
  let component: AdvFilterPanelComponent;
  let fixture: ComponentFixture<AdvFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
