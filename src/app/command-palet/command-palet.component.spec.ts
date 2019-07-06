import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPaletComponent } from './command-palet.component';

describe('CommandPaletComponent', () => {
  let component: CommandPaletComponent;
  let fixture: ComponentFixture<CommandPaletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandPaletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
