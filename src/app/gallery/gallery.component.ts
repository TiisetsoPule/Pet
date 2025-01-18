import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    {image: '../../assets/pictures/haircuting-process-small-dog-sits-table-dog-with-professional.png'},
    // {image: "../../assets/pictures/cat2.jpg"},
    {image: '../../assets/pictures/washing-process-small-dog-bathroom-dog-washed-by-professional.png'},
    // {image: "../../assets/pictures/cat3.jpg"},
    {image: '../../assets/pictures/yorkshire-terrier-getting-procedure-groomer-salon-cropped-photo-little-dog-yorkshire-terrier-puppy-getting-haircut.png'},
    // {image: "../../assets/pictures/cat4.jpg"},
    {image: '../../assets/pictures/haircuting-process-small-dog-sits-table-dog-with-professional.png'}
  ]

  currentIndex = 0;

  navigate(direction: number): void {
    const newIndex = this.currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.images.length) {
      this.currentIndex = newIndex;
    }
  }

  selectImage(index: number): void {
    this.currentIndex = index;
  }

}
