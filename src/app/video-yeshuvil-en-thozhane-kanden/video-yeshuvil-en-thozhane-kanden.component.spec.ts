import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoYeshuvilEnThozhaneKandenComponent } from './video-yeshuvil-en-thozhane-kanden.component';

describe('VideoYeshuvilEnThozhaneKandenComponent', () => {
  let component: VideoYeshuvilEnThozhaneKandenComponent;
  let fixture: ComponentFixture<VideoYeshuvilEnThozhaneKandenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoYeshuvilEnThozhaneKandenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoYeshuvilEnThozhaneKandenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
