export class AnagramService {

    private static instance: AnagramService;

    wordOne: string;
    wordTwo: string;

    constructor(wordOne , wordTwo){
        this.wordOne = wordOne.toUpperCase();
        this.wordTwo = wordTwo.toUpperCase();
    }

    isAnagram():boolean{
        if (this.wordOne == this.wordTwo) {
            return true;
        } else {
            return false;
        }
    }

    

    reverseFirstWord(): AnagramService{
        let reverseString = "";

        const stringArr = Array.from(this.wordOne.replace(/ /g, ''));

         // to reverse string array
        for (var i = stringArr.length - 1; i >= 0; i--) {
            
            //concatenate string
            reverseString += stringArr[i] + "";
        }

        return new AnagramService(reverseString, this.wordTwo);
    }
}