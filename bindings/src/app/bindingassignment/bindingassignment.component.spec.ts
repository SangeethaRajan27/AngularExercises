import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingassignmentComponent } from './bindingassignment.component';

describe('BindingassignmentComponent', () => {
  let component: BindingassignmentComponent;
  let fixture: ComponentFixture<BindingassignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingassignmentComponent]
    });
    fixture = TestBed.createComponent(BindingassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
