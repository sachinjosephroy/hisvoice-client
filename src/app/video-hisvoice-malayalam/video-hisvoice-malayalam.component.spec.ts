import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam.component';

describe('VideoHisvoiceMalayalamComponent', () => {
  let component: VideoHisvoiceMalayalamComponent;
  let fixture: ComponentFixture<VideoHisvoiceMalayalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHisvoiceMalayalamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHisvoiceMalayalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
