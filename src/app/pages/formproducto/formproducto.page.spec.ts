import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormproductoPage } from './formproducto.page';

describe('FormproductoPage', () => {
  let component: FormproductoPage;
  let fixture: ComponentFixture<FormproductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
