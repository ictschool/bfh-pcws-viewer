import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CodeRequest} from "./code-request";
import {CodeResponse} from "./code-response";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PcwsService {

  private createCodePath = 'createCode';

  constructor(
    private httpClient: HttpClient
  ) { }

  createCode(pswcUrl: string, codeRequest: CodeRequest): Observable<CodeResponse> {
    const url = `${pswcUrl}/${this.createCodePath}`;
    return this.httpClient.post<CodeResponse>(url, codeRequest, httpOptions).pipe(
      tap(_ => this.log(`calling ${url} with ${codeRequest}`))
    );
  }

  private log(message: string) {
    console.log(message);
  }
}
