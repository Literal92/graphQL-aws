import { Component } from '@angular/core';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsmobile from 'src/aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amplify-aws';

  constructor() {
    Amplify.configure(awsmobile);
  }
}
