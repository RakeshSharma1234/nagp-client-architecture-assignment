import { Component, OnInit } from '@angular/core';
import { SharedLibService } from '../../../../shared-lib/src/public-api';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrl: './insurance-details.component.scss'
})
export class InsuranceDetailsComponent implements OnInit{
  constructor(private sharedLibService:SharedLibService){}
  ngOnInit(): void {}
  filteredPolicy:any;

  filterResults(policyNumber: string) {
    if (!policyNumber) {
      this.filteredPolicy;
      return;
    }
    let data = this.sharedLibService.getPolicy(policyNumber);
    if(data!=null){
      this.filteredPolicy = JSON.parse(data);
    }
  }
}
