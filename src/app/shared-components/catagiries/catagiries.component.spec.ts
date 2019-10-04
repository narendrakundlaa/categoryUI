import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagiriesComponent } from './catagiries.component';

describe('CatagiriesComponent', () => {
  let component: CatagiriesComponent;
  let fixture: ComponentFixture<CatagiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
