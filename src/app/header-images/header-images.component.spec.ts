import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImagesComponent } from './header-images.component';

describe('HeaderImagesComponent', () => {
  let component: HeaderImagesComponent;
  let fixture: ComponentFixture<HeaderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
