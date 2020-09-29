import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() { }
  visibleImages = [];

  getImages(){
      return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
      return IMAGES.slice(0).find(image => image.id == id)
  }
}

const IMAGES =[
  {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/img1.JPG"},
  {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"assets/img/img2.jpg"},
  {"id":3, "category": "boats", "caption": "The water was nice", "url":"assets/img/img3.JPG"},
  {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"assets/img/img4.JPG"},
  {"id":5, "category": "boats", "caption": "Sunset at the docks", "url":"assets/img/img5.JPG"},
  {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/img6.JPG"},
  {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/img7.JPG"},
  {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/img8.JPG"},
  {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/img9.JPG"},
  {"id":10, "category": "camping", "caption": "Our camping spot", "url":"assets/img/img10.JPG"},
  {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/img11.JPG"},
  {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/img12.JPG"},
  {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/img13.JPG"},
  {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/img14.JPG"},
  {"id":15, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/img15.JPG"},
  {"id":16, "category": "library", "caption": "Local library", "url":"assets/img/img16.JPG"},
  {"id":17, "category": "library", "caption": "Nice library", "url":"assets/img/img17.JPG"},
  {"id":18, "category": "library", "caption": "Nice library", "url":"assets/img/109672.jpg"},
  {"id":19, "category": "library", "caption": "Nice library", "url":"assets/img/img1a.JPG"},
  {"id":20, "category": "library", "caption": "Nice library", "url":"assets/img/img1b.JPG"}
]