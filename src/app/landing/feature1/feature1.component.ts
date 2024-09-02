import { Component } from '@angular/core';
import { ThinHeadingComponent } from "../layout/thin-heading/thin-heading.component";

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [ThinHeadingComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {

}
