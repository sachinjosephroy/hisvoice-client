import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBlessedAssuranceComponent } from './video-blessed-assurance.component';

describe('VideoBlessedAssuranceComponent', () => {
  let component: VideoBlessedAssuranceComponent;
  let fixture: ComponentFixture<VideoBlessedAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBlessedAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBlessedAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
