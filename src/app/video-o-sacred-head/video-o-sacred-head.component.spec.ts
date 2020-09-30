import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOSacredHeadComponent } from './video-o-sacred-head.component';

describe('VideoOSacredHeadComponent', () => {
  let component: VideoOSacredHeadComponent;
  let fixture: ComponentFixture<VideoOSacredHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoOSacredHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoOSacredHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
