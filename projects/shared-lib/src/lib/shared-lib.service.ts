import { Injectable } from '@angular/core';
import insurance_policies from '../data/insurance_policies.json';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() {
    this.loadPoliciesInStorage();
   }

  policies:any = insurance_policies;
  public policyList:[] = this.policies["policies"];

  loadPoliciesInStorage() {
    this.policyList.forEach(policy => {
      localStorage.setItem(policy["policyNumber"],JSON.stringify(policy));
    });
     
  }

  getPolicy(policyNumber:string) {
    let policyNo = policyNumber.toUpperCase()
    return localStorage.getItem(policyNo);
  }
}
