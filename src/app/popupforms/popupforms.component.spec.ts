import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupformsComponent } from './popupforms.component';

describe('PopupformsComponent', () => {
  let component: PopupformsComponent;
  let fixture: ComponentFixture<PopupformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
