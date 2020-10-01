import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRingChristmasBellsComponent } from './video-ring-christmas-bells.component';

describe('VideoRingChristmasBellsComponent', () => {
  let component: VideoRingChristmasBellsComponent;
  let fixture: ComponentFixture<VideoRingChristmasBellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRingChristmasBellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRingChristmasBellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
