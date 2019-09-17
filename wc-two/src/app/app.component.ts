import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wc-two';

  compName: String = 'Component Two!';

  @Input() name: String;

  @Output() buttonClicked = new EventEmitter<{message:String}>(); //custom event for button click

  onButtonClick(){
    this.compName = this.name ? this.name : this.compName;
    var msg = this.compName + " said Hello";
    this.buttonClicked.emit({message: msg});
  }
}
