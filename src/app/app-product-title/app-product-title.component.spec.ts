import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductTitleComponent } from './app-product-title.component';

describe('AppProductTitleComponent', () => {
  let component: AppProductTitleComponent;
  let fixture: ComponentFixture<AppProductTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
