import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Ironman','She Hulk','Hulk','Thor'];
  public deleteHero?: string;

  public removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
