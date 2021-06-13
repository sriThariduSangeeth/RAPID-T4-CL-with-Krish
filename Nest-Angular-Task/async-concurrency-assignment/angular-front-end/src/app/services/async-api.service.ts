import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AnagramInput } from "../model/anagram.input";
import { LargeNumberInput, LargeNumberResponse } from "../model/large-number.input";

@Injectable({
    providedIn: 'root'
  })
export class AsyncApiService {

    SERVER_URL: string = environment.apiUrl;
    
    constructor(private httpClient: HttpClient) { }

    public findAnagram(angram : AnagramInput):Promise<boolean>{
        return this.httpClient.post<any>(`${this.SERVER_URL}/anagram`, angram).toPromise();
    }

    public findLargeNumber(data : LargeNumberInput) : Observable<LargeNumberResponse>{
        return this.httpClient.post<LargeNumberResponse>(`${this.SERVER_URL}/large-number`, data);
    }

    public findRepititionOfSentence(sentence : string ,type: string):Promise<any>{
        return this.httpClient.post<any>(`${this.SERVER_URL}/duplicates/${type}`, {sentence: sentence}).toPromise();
    }
}