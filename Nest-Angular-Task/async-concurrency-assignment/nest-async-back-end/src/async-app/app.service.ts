import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AnagramService } from 'src/async-service-helper/anagram.service';
import { LargeNumberService } from 'src/async-service-helper/large-number.service';
import { RepititionService } from 'src/async-service-helper/repitition.service';

@Injectable()
export class AppService {

  constructor(){}

  getHello(): string {
    return 'Hello World!';
  }

  findAnagramWords(firstWord:string , secondWord:string):Promise<boolean>{
    return new Promise((resolve) => {
      if(firstWord && secondWord){
        resolve(new AnagramService(firstWord, secondWord).reverseFirstWord().isAnagram());
      }else{
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);    
      }
    });
    
    
  }

  async findRepititionOfSentence(sentence: string , type:string){
    const resObj = new RepititionService(sentence);
    if(type.toLowerCase() === "full"){
      return await resObj.findAllRepetition();
    }else if(type.toLowerCase() === "summer"){
      return await resObj.findSummeryRepitition();
    }
  }
}
