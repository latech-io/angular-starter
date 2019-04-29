import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heros = [{
    name: 'skander',
    description: 'mechlia',
    image: 'assets/batman.gif'
  },
  {
    name: 'nadia',
    description: 'mechlia',
    image: 'assets/eye.gif'
  },
  {
    name: 'kacem',
    description: 'mechlia',
    image: 'assets/suisse.gif'
  }];

  constructor() { }

  ngOnInit() {
  }

}
