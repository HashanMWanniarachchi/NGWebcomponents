import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'staticserver';

  //send data back to custom element one
  /*handleButtonClick(event){
    const component = document.querySelector('wc-one');
    component.setAttribute("value", event.detail.message);

    //const vuecomponent = document.querySelector('wc-three');
    //vuecomponent.setAttribute("value", event.detail.message);
  }*/

  ngOnInit(){
    //subscribe to the custom event of the custom element
    /*const component = document.querySelector('wc-two');
      component.addEventListener('buttonClicked', (event) => {
      this.handleButtonClick(event);
    });
    */
  }
}
