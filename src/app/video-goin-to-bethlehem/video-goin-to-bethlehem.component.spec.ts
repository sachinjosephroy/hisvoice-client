import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem.component';

describe('VideoGoinToBethlehemComponent', () => {
  let component: VideoGoinToBethlehemComponent;
  let fixture: ComponentFixture<VideoGoinToBethlehemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGoinToBethlehemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGoinToBethlehemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
