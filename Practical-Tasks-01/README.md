<h1 align="center">RAPID T4 CL</h1>
<h3>Practical Tasks 01 :star: :school_satchel: </h3> 
<style>H1{color:Blue;}
H3{color:DarkOrange;}
p{color:Black;}</style>
> There are 4 questions to implement.

### Write a Programme :hourglass_flowing_sand:

- To find 3rd larger number in given number array.
- To Count and display number of repetition in each letter in a sentence.
- To find missing number of given sequence number set. This number set can be mixed.
- To find given word is anagram or not ?
	ex: user should insert two words to check whether anagram or not.

#### This is a NodeJS Express Project and To run this project

> Clone Repo 
````
https://github.com/sriThariduSangeeth/RAPID-T4-CL-with-Krish.git
````
> move to **Practical-Tasks-01** directry

> install packeges :
	````
	npm install
	````
	
> run project :
	````
	npm start
	````

#### Release REST API

1. [Quetion One](./api/qOne/rapid.qOne.service.js)
  - [x] find 3rd larger number in given number array

	```
	API (post)  : http://localhost:3000/api/rapid/q-one
	BODY : { "array" : [3,6,4,8,6,9,5,23,5,4]}
	RESPONSE : { "success": 1,
  			"data": { "sortedArray": [3,4,4,5,5,6,6,8,9,23], "thirdLargNumber": 8 }
		   }	
	```

2. [Quetion Two](./api/qTwo/rapid.qTwo.service.js)
  - [x] Count and display number of repetition in each letter in a sentence

	```
	API (post)  : http://localhost:3000/api/rapid/q-two
	BODY : { "word" : "These days I am studying"}
	RESPONSE : { "success": 1, "data": {
			"sortedArray": ["I","T","a","a","d","d","e","e","g","h","i","m","n","s","s","s","t","u","y","y"],
        		"duplicateReport": {
            				"I": 1,	"T": 1,	"a": 2,	"d": 2,
            				"e": 2,	"g": 1,	"h": 1,	"i": 1,
            				"m": 1,	"n": 1,	"s": 3,	"t": 1,	"u": 1,	"y": 2	},
			"minimumReport": {	
					"A": 2,	"D": 2,	"E": 2,	"G": 1,	"H": 1,	"I": 2,	
					"M": 1,	"N": 1,	"S": 3,	"T": 2,	"U": 1,	"Y": 2	}
					}
			}
	
	```
3. [Quetion Three](./api/qTree/rapid.qTree.service.js)
  - [x] find missing number of given sequence number set

	```
	API (post)  : http://localhost:3000/api/rapid/q-tree
	BODY : { "array" : [21,20,25,22,23,28,26,27,29] }
	RESPONSE : { "success": 1, "data": {
        		"sortedArray": [ 20, 21, 22, 23, 25, 26, 27, 28, 29 ],
        		"missingNumber": 24	}
		   }
	
	```
4. [Quetion Four](./api/qFour/rapid.qFour.service.js)
  - [x] find given word is anagram or not.

	```
	API (post)  : http://localhost:3000/api/rapid/q-four
	BODY : { "inputOne" : "Stressed", "inputTwo" : "Desserts"}
	RESPONSE : { "success": 1, 
			"data": { "anagram": true, "description": "Yes... These two words are anagram" }
			}
	
	```
