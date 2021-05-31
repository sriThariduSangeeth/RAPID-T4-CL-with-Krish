<h1 align="center">RAPID T4 CL</h1>
<h3>Practical Tasks 02 :star: :school_satchel: </h3> 

> NodeJS Express Server.

### Write a Programme :hourglass_flowing_sand:

- To reverse number without using String functions.

#### This is a NodeJS Express Project and To run this project

> Clone Repo 
````
https://github.com/sriThariduSangeeth/RAPID-T4-CL-with-Krish.git
````
> move to **number-reverse-without-string-fun** directry

> install packeges :
	````
	npm install
	````
	
> run project :
	````
	npm start
	````

#### Release REST API

1. To reverse Single number
  
	```
	API (post)  : http://localhost:3000/api/rapid/number-reverse
	BODY : { "number" : 34}
	RESPONSE : { "success": 1,
  				 "data": { "34": 43 }
		   		}	
	```

2. To reverse number of Array

	```
	API (post)  : http://localhost:3000/api/rapid/number-reverse
	BODY : { "number" : [21,20,25,22,23,28,26,27,29] }
	RESPONSE : { "success": 1, "data": {
        		"sortedArray": [ 20, 21, 22, 23, 25, 26, 27, 28, 29 ],
        		"data": { "22": 22, "23": 32, "25": 52, "26": 62, "27": 72, "28": 82, "29": 92}	
				}
		   }
	
	```
