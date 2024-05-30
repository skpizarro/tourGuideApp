import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaravillasColombiaPageComponent } from './maravillas-colombia-page.component';

describe('MaravillasColombiaPageComponent', () => {
  let component: MaravillasColombiaPageComponent;
  let fixture: ComponentFixture<MaravillasColombiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaravillasColombiaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaravillasColombiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
