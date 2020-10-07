import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../shared/Member';
import { FormerMember } from '../shared/FormerMember';

@Injectable({
  providedIn: 'root'
})
export class AdminMembersService {

  apiUrlSoprano = 'http://localhost:5000/api/other/soprano';
  apiUrlAlto = 'http://localhost:5000/api/other/alto';
  apiUrlTenor = 'http://localhost:5000/api/other/tenor';
  apiUrlBass = 'http://localhost:5000/api/other/bass';
  apiUrlFormerMember = 'http://localhost:5000/api/other/former-member';

  constructor(private http: HttpClient) { }

  createSoprano(sop): Observable<Member> {
    return this.http.post<Member>(this.apiUrlSoprano, sop);
  }

  createAlto(sop): Observable<Member> {
    return this.http.post<Member>(this.apiUrlAlto, sop);
  }

  createTenor(sop): Observable<Member> {
    return this.http.post<Member>(this.apiUrlTenor, sop);
  }

  createBass(sop): Observable<Member> {
    return this.http.post<Member>(this.apiUrlBass, sop);
  }

  createFormerMember(member): Observable<FormerMember> {
    return this.http.post<FormerMember>(this.apiUrlFormerMember, member);
  }
}
