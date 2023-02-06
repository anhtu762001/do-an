import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSuaChuaTanNoi } from './s-suachuatannoi.component';

describe('SSuaChuaTanNoiComponent', () => {
  let component: SSuaChuaTanNoi;
  let fixture: ComponentFixture<SSuaChuaTanNoi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSuaChuaTanNoi ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSuaChuaTanNoi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
