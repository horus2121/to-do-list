import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyA7uGrroLhM_VOOtBSmO6KSZD7CdftKt0Q';

  constructor(private http: HttpClient) { }

  translate(text: string) {
    return this.http.post(this.url, {
      "q": text,
      "target": "es"
    }).pipe(
      map((res: any) => {
        return res.data.translations[0].translatedText;
      })
    );
  }
}
