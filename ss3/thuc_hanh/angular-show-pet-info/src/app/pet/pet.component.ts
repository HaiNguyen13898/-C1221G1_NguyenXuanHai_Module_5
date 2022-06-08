import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent implements OnInit {

  pet: Pet = {
    name: 'puppie',
    image: 'https://kienthucbonphuong.com/images/202006/pet-la-gi/pet-la-gi.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

  petInformation(pet: Pet) {
    this.pet = pet
  }


}

