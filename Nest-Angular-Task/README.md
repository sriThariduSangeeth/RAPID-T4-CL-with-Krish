<h3 align="center">:rotating_light: :construction:&ensp;&ensp;Work In Progress&ensp;&ensp;:construction: :rotating_light:</h3>
<h1 align="center">NestJS and Angular 11 Tasks</h1>

- [x] BackEnd Server - NestJS
- [x] FrontEnd side - Angular 11


1. [async concurrency assignment](./async-concurrency-assignment)
   - angular-front-end
     - Find Anagram
     - Find Large number
     - Find occurence in given paragraph
     
   - nest-async-back-end
     - Find Anagram End Point (POST Method)
       ````
       API : http://.wwww.localhost:3000/async/anagram
       Body : {
                "firstWord":"Stressed",
                "secondWord":"Desserts"
              }
        response : Promise<boolean>
       ````
      - Find Large Number (POST Method)
        ````
        API 1 : http://.wwww.localhost:3000/async/large-number
        Body : {
                "numberArray" : [23,  24,  45, 51,  61, 72,  80,  81, 85, 102, 111, 116, 117 ],
                "indexOfNumber" : 4
                }
        API 2 : http://.wwww.localhost:3000/async/large-number/4
         
        Body : {"numberArray" : [23,  24,  45, 51,  61, 72,  80,  81, 85, 102, 111, 116, 117 ]}
         
        response : Observable<Object>
                  { "sortedArray": [ 117, 116, 111, 102, 85, 81, 80, 72, 61, 51, 45, 24, 23],
                    "number": 102
                  }
        ````
       - Find Repitition in given sentence
         ````
         API 1 : http://.wwww.localhost:3000/async/duplicates/full
         API 2 : http://.wwww.localhost:3000/async/duplicates/summer
         
         Body : {"sentence" : "This your country. please"}
         
         ````
