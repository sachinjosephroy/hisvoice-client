import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveContactsComponent } from './retrieve-contacts.component';

describe('RetrieveContactsComponent', () => {
  let component: RetrieveContactsComponent;
  let fixture: ComponentFixture<RetrieveContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
