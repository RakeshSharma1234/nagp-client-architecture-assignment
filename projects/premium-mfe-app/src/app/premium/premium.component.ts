import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent implements OnInit {
  private worker: Worker | undefined;
  result: any;
  ngOnInit(): void {
     if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker =  new Worker(new URL('../premium.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        alert(`page got message: ${data}`);
      };
      this.worker.postMessage(80);
    } else {
      alert("Web workers are not supported in this environment");
    }
  }
  

}
