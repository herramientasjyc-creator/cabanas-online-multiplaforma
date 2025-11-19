import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabanasPage } from './cabanas.page';

describe('CabanasPage', () => {
  let component: CabanasPage;
  let fixture: ComponentFixture<CabanasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CabanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
