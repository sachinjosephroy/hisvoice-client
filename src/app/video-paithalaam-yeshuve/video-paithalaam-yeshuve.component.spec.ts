import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve.component';

describe('VideoPaithalaamYeshuveComponent', () => {
  let component: VideoPaithalaamYeshuveComponent;
  let fixture: ComponentFixture<VideoPaithalaamYeshuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPaithalaamYeshuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPaithalaamYeshuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
