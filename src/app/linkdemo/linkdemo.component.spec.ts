import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdemoComponent } from './linkdemo.component';

describe('LinkdemoComponent', () => {
  let component: LinkdemoComponent;
  let fixture: ComponentFixture<LinkdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
