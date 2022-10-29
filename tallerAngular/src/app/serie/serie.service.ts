import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie';
import { SerieDetail } from './serie-detail';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = environment.baseUrl + 'series.json';

constructor(private http: HttpClient) { }

getSeries(): Observable<SerieDetail []> {
  return this.http.get<SerieDetail []>(this.apiUrl);
}

}
