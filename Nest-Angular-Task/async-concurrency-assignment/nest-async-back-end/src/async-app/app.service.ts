import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { AnagramService } from 'src/async-service-helper/anagram.service';
import { LargeNumberService } from 'src/async-service-helper/large-number.service';
import { RepititionService } from 'src/async-service-helper/repitition.service';
import { QuickSort } from 'src/common/quick-sort';

@Injectable()
export class AppService {

  constructor(private readonly quickSort: QuickSort){}

  public findAnagramWords(firstWord:string , secondWord:string):Promise<boolean>{
    return new Promise((resolve) => {
      if(firstWord && secondWord){
        resolve(new AnagramService(firstWord, secondWord).reverseFirstWord().isAnagram());
      }else{
        throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);    
      }
    });
    
    
  }

  public async findRepititionOfSentence(sentence: string , type:string):Promise<Object>{
    const resObj = new RepititionService(sentence);
    if(type.toLowerCase() === "full"){
      return await resObj.findAllRepetition();
    }else if(type.toLowerCase() === "summer"){
      return await resObj.findSummeryRepitition();
    }
  }

  public findLargeNumber(numberArray : Array<number> , index: number): Observable<Object>{
  
    if(index > numberArray.length || index == 0){
      throw new HttpException('Invalid Index Number', HttpStatus.BAD_REQUEST);
    }
    return new Observable(observer => {
      const sortarr =  this.quickSort.sort(numberArray);
      observer.next({
        sortedArray : sortarr,
        number : sortarr[index- 1]});
      observer.complete();
    });

  }
}
