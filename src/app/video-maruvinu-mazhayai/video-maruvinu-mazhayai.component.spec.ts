import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMaruvinuMazhayaiComponent } from './video-maruvinu-mazhayai.component';

describe('VideoMaruvinuMazhayaiComponent', () => {
  let component: VideoMaruvinuMazhayaiComponent;
  let fixture: ComponentFixture<VideoMaruvinuMazhayaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMaruvinuMazhayaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMaruvinuMazhayaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
