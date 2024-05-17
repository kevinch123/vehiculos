import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosListarComponent } from './vehiculos-listar.component';

describe('VehiculosListarComponent', () => {
  let component: VehiculosListarComponent;
  let fixture: ComponentFixture<VehiculosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
