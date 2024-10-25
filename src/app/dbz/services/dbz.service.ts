import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public lstCharacters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 3000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 2000
    }
  ];

  public addCharacter(character: Character): void {
    console.log(character);
    this.lstCharacters.push(character);
  }

  // public onDeleteCharacter(index: number): void {
  //   this.lstCharacters.splice(index,1);
  // }

  public deleteCharacterById( id:string ){
    this.lstCharacters = this.lstCharacters.filter(character => character.id !== id);
  }
}
