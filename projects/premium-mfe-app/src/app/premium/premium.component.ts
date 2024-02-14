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
  workerResult: any;
  policyNumber:string | undefined;
  policyPremium:string | undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.policyNumber = params['policy'];
      this.setPolicyPremium();
    });
  }
  
  // Web Worker Integration
  generatePremiumWorkerResponse(){
    const worker = new Worker(new URL('./premium.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      this.workerResult = data;
    };  
    worker.postMessage(70000);
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
