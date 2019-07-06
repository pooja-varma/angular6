import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTableComponent } from './invoiceTable.component';

describe('TableComponent', () => {
  let component: InvoiceTableComponent;
  let fixture: ComponentFixture<InvoiceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
