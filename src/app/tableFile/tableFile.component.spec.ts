import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFileComponent } from './tableFile.component';

describe('TableFileComponent', () => {
  let component: TableFileComponent;
  let fixture: ComponentFixture<TableFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
