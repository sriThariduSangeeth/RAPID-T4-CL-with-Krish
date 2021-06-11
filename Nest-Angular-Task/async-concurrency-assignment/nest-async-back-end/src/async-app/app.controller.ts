import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FindAnagramDto } from 'src/dto/find-anagram.dto';
import { FindLargeNumberDto } from 'src/dto/find-large-number.dto';
import { AppService } from './app.service';

@Controller('async')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('anagram')
  findAnagramWords(@Body() findAnagram : FindAnagramDto): Promise<boolean> {
    return this.appService.findAnagramWords(findAnagram.firstWord , findAnagram.secondWord);
  }

  @Post('duplicates/:type')
  findRepititionOfSentence(@Body() sentence , @Param() params):Promise<Object>{
    return this.appService.findRepititionOfSentence(sentence.sentence , params.type);
  }

  @Post('large-number')
  findLargeNumber(@Body() findLargeNumber: FindLargeNumberDto){

  }

}
