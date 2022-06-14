import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/iword";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictinory-detail',
  templateUrl: './dictinory-detail.component.html',
  styleUrls: ['./dictinory-detail.component.css']
})
export class DictinoryDetailComponent implements OnInit {
  translate: IWord;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {

    activatedRoute.paramMap.subscribe((paramMap: ParamMap ) => {
      const id = paramMap.get('id');
      if(id != null) {
        this.translate = this.dictionaryService.translateFindById(Number(id))
      }
    })
  }

  ngOnInit(): void {
  }

}
