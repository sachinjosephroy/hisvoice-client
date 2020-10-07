import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../shared/member';
//import { Soprano } from '../shared/Soprano';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  apiUrlSoprano = 'http://localhost:5000/api/other/soprano';
  apiUrlGetSopranos = 'http://localhost:5000/api/other/sopranos';
  apiUrlAlto = 'http://localhost:5000/api/other/alto';
  apiUrlGetAltos = 'http://localhost:5000/api/other/altos';
  apiUrlTenor = 'http://localhost:5000/api/other/tenor';
  apiUrlGetTenors = 'http://localhost:5000/api/other/tenors';
  apiUrlBass = 'http://localhost:5000/api/other/bass';
  apiUrlGetBasses = 'http://localhost:5000/api/other/basses';
  apiUrlGetFormerMembers = 'http://localhost:5000/api/other/former-members';

  /* apiUrlSoprano = 'https://node-db-tutorial10.herokuapp.com/api/other/soprano';
  apiUrlGetSopranos = 'https://node-db-tutorial10.herokuapp.com/api/other/sopranos';
  apiUrlAlto = 'https://node-db-tutorial10.herokuapp.com/api/other/alto';
  apiUrlGetAltos = 'https://node-db-tutorial10.herokuapp.com/api/other/altos';
  apiUrlTenor = 'https://node-db-tutorial10.herokuapp.com/api/other/tenor';
  apiUrlGetTenors = 'https://node-db-tutorial10.herokuapp.com/api/other/tenors';
  apiUrlBass = 'https://node-db-tutorial10.herokuapp.com/api/other/bass';
  apiUrlGetBasses = 'https://node-db-tutorial10.herokuapp.com/api/other/basses'; */

  constructor(private http: HttpClient) { }

  getSopranos() {
    return this.http.get(this.apiUrlGetSopranos);
  }

  getAltos() {
    return this.http.get(this.apiUrlGetAltos);
  }

  getTenors() {
    return this.http.get(this.apiUrlGetTenors);
  }

  getBasses() {
    return this.http.get(this.apiUrlGetBasses);
  }

  getFormerMembers() {
    return this.http.get(this.apiUrlGetFormerMembers);
  }
  
}
