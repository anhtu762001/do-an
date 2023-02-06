import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBaoHanh } from './s-baohanh.component';

describe('SDkbiensoComponent', () => {
  let component: SBaoHanh;
  let fixture: ComponentFixture<SBaoHanh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBaoHanh ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBaoHanh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
