import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = true;
   
// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Krooshinmel',
    link: 'assets/audio/Krooshinmel_Soprano_Track.mp3'
  },
  {
    title: 'Count Your Blessings (Soprano)',
    link: 'assets/audio/Count Your Blessings_Soprano_Track.mp3'
  },
  {
    title: 'Count Your Blessings (All Parts Together)',
    link: 'assets/audio/Count Your Blessings_All_Track.mp3'
  },
];

msaapPlaylist2: Track[] = [
  {
    title: 'Krooshinmel',
    link: 'assets/audio/Krooshinmel_Soprano_Track.mp3'
  },
  {
    title: 'Count Your Blessings (Soprano)',
    link: 'assets/audio/Count Your Blessings_Soprano_Track.mp3'
  },
  {
    title: 'Count Your Blessings (All Parts Together)',
    link: 'assets/audio/Count Your Blessings_All_Track.mp3'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
