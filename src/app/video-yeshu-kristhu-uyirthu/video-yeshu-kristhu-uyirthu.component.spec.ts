import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoYeshuKristhuUyirthuComponent } from './video-yeshu-kristhu-uyirthu.component';

describe('VideoYeshuKristhuUyirthuComponent', () => {
  let component: VideoYeshuKristhuUyirthuComponent;
  let fixture: ComponentFixture<VideoYeshuKristhuUyirthuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoYeshuKristhuUyirthuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoYeshuKristhuUyirthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
