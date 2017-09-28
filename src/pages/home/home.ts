import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: String[] = [
    'cover',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '20',
    '40',
    '100',
    '00',
    'break',
    'brownie',
    'question',
    'shave',
    'cover',
  ];

  constructor(public navCtrl: NavController) {

  }

}
