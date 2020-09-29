import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHisvoiceEnglishComponent } from './video-hisvoice-english.component';

describe('VideoHisvoiceEnglishComponent', () => {
  let component: VideoHisvoiceEnglishComponent;
  let fixture: ComponentFixture<VideoHisvoiceEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHisvoiceEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHisvoiceEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
