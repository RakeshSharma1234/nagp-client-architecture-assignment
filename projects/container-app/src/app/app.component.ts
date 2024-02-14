import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  customEventData:any;
  ngOnInit(): void {
    fromEvent(window,'event').subscribe((event:any)=>{
      this.customEventData = event.detail;
     })
  }
  title = 'container-app';
  resetCustomEventData(){
    this.customEventData = undefined;
  }

  navigateHome(){
    
  }
}
