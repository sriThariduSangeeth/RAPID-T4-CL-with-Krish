import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { nextTick } from 'process';
import { from, Observable } from 'rxjs';
import { FindAnagramDto } from 'src/dto/find-anagram.dto';
import { FindLargeNumberDto } from 'src/dto/find-large-number.dto';
import { AppService } from './app.service';

@Controller('async')
export class AppController {

  constructor(private readonly appService: AppService) {}

  /**
   * 
   * @param {FirstWord , SecondWord} 
   * @returns boolean value
   */
  @Post('anagram')
  public findAnagramWords(@Body() findAnagram : FindAnagramDto): Promise<boolean> {
    return this.appService.findAnagramWords(findAnagram.firstWord , findAnagram.secondWord);
  }

  /**
   * 
   * @param param0 
   * @param params 
   * @returns 
   */
  @Post('duplicates/:type')
  public findRepititionOfSentence(@Body() {sentence} , @Param() params):Promise<Object>{
    return this.appService.findRepititionOfSentence(sentence , params.type);
  }

  /**
   * 
   * @param findLargeNumber 
   */
  @Post('large-number')
  public findLargeNumber(@Body() findLargeNumber: FindLargeNumberDto): Observable<Object>{
    return this.appService.findLargeNumber(findLargeNumber.numberArray , findLargeNumber.indexOfNumber);
  }

  /**
   * 
   * @param numberArray 
   */
   @Post('large-number/:number')
   public findLargeNumberSecond(@Body() {array} , @Param() param):Observable<Object>{
    return this.appService.findLargeNumber(array , param.number);
   }

}
