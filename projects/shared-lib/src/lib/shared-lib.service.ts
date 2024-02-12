import { Injectable } from '@angular/core';
import insurance_policies from '../data/insurance_policies.json';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() {
    this.loadPoliciesInStorage();
   }


  loadPoliciesInStorage() {
    localStorage.setItem("insurancePolicies",JSON.stringify(insurance_policies));
  }

  getPolicy(policyNumber:any) {
    let policyNo = policyNumber.toUpperCase()
    let localStoragePolicies:any = localStorage.getItem("insurancePolicies");
    let policies:any = JSON.parse(localStoragePolicies);
    const policy = policies.filter((policy:any)=> policy["policyNumber"] === policyNo);
    if(policy[0]){
    return policy[0];
    }else{
      alert("No Policy Found for policyNumber: "+policyNumber);
      return undefined;
    }
  }
}
