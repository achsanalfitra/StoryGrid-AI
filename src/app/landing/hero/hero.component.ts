import { Component } from '@angular/core';
import { ThinHeadingComponent } from "../layout/thin-heading/thin-heading.component";
import { GreySubtitleComponent } from "../layout/grey-subtitle/grey-subtitle.component";
import { BigButtonComponent } from "../layout/big-button/big-button.component";
import { BigButtonBlackComponent } from "../layout/big-button-black/big-button-black.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ThinHeadingComponent, GreySubtitleComponent, BigButtonComponent, BigButtonBlackComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
