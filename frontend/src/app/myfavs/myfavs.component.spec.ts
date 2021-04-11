import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavsComponent } from './myfavs.component';

describe('MyfavsComponent', () => {
  let component: MyfavsComponent;
  let fixture: ComponentFixture<MyfavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
