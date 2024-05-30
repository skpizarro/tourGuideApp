import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSitioPageComponent } from './detalle-sitio-page.component';

describe('DetalleSitioPageComponent', () => {
  let component: DetalleSitioPageComponent;
  let fixture: ComponentFixture<DetalleSitioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleSitioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSitioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
