<h1 align="center">RAPID T4 CL</h1>
<h3>Practical Tasks 01</h3> :star: :school_satchel:

> There are 4 questions to implement.

### Write a Programme :hourglass_flowing_sand:

- To find 3rd larger number in given number array.
- To Count and display number of repetition in each letter in a sentence.
- To find missing number of given sequence number set. This number set can be mixed.
- To find given word is anagram or not ?
	ex: user should insert two words to check whether anagram or not.

#### This is a NodeJS Express Project and To run this project

> install packeges :
	````
	npm install
	````
	
> run project :
	````
	npm start
	````

#### Release REST API

1. Quetion One
  - find 3rd larger number in given number array

	```
	API (post)  : http://localhost:3000/api/rapid/q-one
	BODY : { "array" : [3,6,4,8,6,9,5,23,5,4]}
	RESPONSE : Json.obj
	
	```

2. Quetion Two
  - Count and display number of repetition in each letter in a sentence

	```
	API (post)  : http://localhost:3000/api/rapid/q-two
	BODY : { "word" : "These days I am studying"}
	RESPONSE : Json.obj
	
	```
3. Quetion Three
  - find missing number of given sequence number set

	```
	API (post)  : http://localhost:3000/api/rapid/q-tree
	BODY : { "array" : [1,2,3,4,5,7,8,9,10]}
	RESPONSE : Json.obj
	
	```
4. Quetion Four
  - find given word is anagram or not.

	```
	API (post)  : http://localhost:3000/api/rapid/q-four
	BODY : { "inputOne" : "Stressed", "inputTwo" : "Desserts"}
	RESPONSE : Json.obj-(True | False)
	
	```
