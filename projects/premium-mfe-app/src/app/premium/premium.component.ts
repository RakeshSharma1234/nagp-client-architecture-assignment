import { Component,OnInit } from '@angular/core';
import { SharedLibService } from '../../../../shared-lib/src/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent implements OnInit {
  constructor(private sharedLibService:SharedLibService, private route: ActivatedRoute){}
  worker: Worker | undefined;
  policyNumber:string | undefined;
  policyPremium:string | undefined;
  ngOnInit(): void {
    //  if (typeof Worker !== 'undefined') {
    //   // Create a new
    //   this.worker =  new Worker(new URL('../premium.worker', import.meta.url));
    //   this.worker.onmessage = ({ data }) => {
    //     alert(`page got message: ${data}`);
    //   };
    //   this.worker.postMessage(80);
    // } else {
    //   alert("Web workers are not supported in this environment");
    // }
    this.route.queryParams.subscribe(params => {
      this.policyNumber = params['policy'];
      this.setPolicyPremium();
    });
  }
  
  setPolicyPremium():void {
    if(this.policyNumber && this.policyNumber.length > 0){
      if(this.sharedLibService.getPolicy(this.policyNumber)){
       this.policyPremium = this.sharedLibService.getPolicy(this.policyNumber)['premium'];
      }
    } else{
      this.policyPremium = '';
    }
  }

  payment():void {
    if(!this.policyNumber || !this.policyPremium){
      alert("Please provide the policyNumber and Premium");
      return;
    }
    if(this.policyNumber.length > 0){
       alert("Payment is completed for Policy: "+this.policyNumber+" with premium amount: "+this.policyPremium);
    }
  }
  

}
