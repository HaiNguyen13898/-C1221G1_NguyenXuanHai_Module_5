import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: IWord [] = []
  constructor() {
    this.dictionary.push({id: 1, word: 'Hello', mean: 'Xin chào'});
    this.dictionary.push({id: 2, word: 'Car', mean: 'Xe ô tô'});
    this.dictionary.push({id: 3, word: 'Book', mean: 'Quyển sách'});
    this.dictionary.push({id: 4, word: 'Television', mean: 'Ti vi'});
  }

  getAll(): IWord[] {
    return this.dictionary;
  }

  translateFindById(id: number) {
    for (let word of this.dictionary) {
      if (word.id == id ) {
        return word
      }
    }
  }
}
