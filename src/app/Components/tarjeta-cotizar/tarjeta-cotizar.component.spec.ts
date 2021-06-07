import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCotizarComponent } from './tarjeta-cotizar.component';

describe('TarjetaCotizarComponent', () => {
  let component: TarjetaCotizarComponent;
  let fixture: ComponentFixture<TarjetaCotizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCotizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
