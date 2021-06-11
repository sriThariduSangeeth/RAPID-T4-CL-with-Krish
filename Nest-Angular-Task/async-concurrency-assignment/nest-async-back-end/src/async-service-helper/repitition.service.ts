export class RepititionService {

    sentence : string;

    constructor(sentence: string){
        this.sentence = sentence;
    }

    findAllRepetition = () => {
        let word = this.sentence;
        //split using spaces and inster into string array
        const stringArr = Array.from(word.split(''));

        return this.getRepitition(stringArr);
    }

    findSummeryRepitition(){
        let word = this.sentence;
        //remove spaces and inster into string array
        const summerArr = Array.from(word.replace(/ /g, '').toUpperCase());

        return this.getRepitition(summerArr);

    }

    getRepitition(arr : Array<string>): Object{

        var objAllRepition = {};

        for (let i = 0; i < arr.length; i++) {
            {objAllRepition[arr[i]] = (objAllRepition[arr[i]] || 0) + 1};
        }

        return objAllRepition;
    }
}