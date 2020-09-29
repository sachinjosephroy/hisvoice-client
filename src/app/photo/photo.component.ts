import { Component, OnInit } from '@angular/core';
import { ImageService } from '../sharedservice/image.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  image:any

  constructor(private imageService: ImageService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

  goBack() {
    this.location.back();
  }

}
