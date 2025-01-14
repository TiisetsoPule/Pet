import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  minicard = [
    {
    img: '../../assets/pictures/002-dog.png',
    num: 6000,
    title: 'New hairstyle'
  }, 
  {
    img: '../../assets/pictures/004-scissors.png',
    num: 300,
    title: 'A regular guest'
  },
  {
    img: '../../assets/pictures/001-expert.png',
    num: '10 years',
    title: 'Experience'
  },
]

}
