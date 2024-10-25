import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = "Spiderman";
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm() {
    this.name = "Ironman";
    this.age = 45;
  }
}
