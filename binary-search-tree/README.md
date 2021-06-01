<h1 align="center">Binary Search Tree</h1>
<h3>Practical Tasks 02 :star: :school_satchel: </h3> 

> NodeJS simpale application.

### Write a Programme :hourglass_flowing_sand:

- To print All leaf nodes of a binary tree where depth is grater than 10
- To demostrate PreOrder traversal of a binary tree. (Depth first search)
- To demonstrate InOrder traversal of a binary tree. (Depth first search)
- To demonstrate PostOrder traversal of a binary tree. (Depth first search)

#### This is a NodeJS Express Project and To run this project

> Clone Repo 
````
https://github.com/sriThariduSangeeth/RAPID-T4-CL-with-Krish.git
````
> move to **binary-search-tree** directry

> install packeges :
	````
	npm install
	````
	
> run project :
	````
	npm start
	````
1. Insert Array : 
   ````
   	const numberArray = [218, 99, 57, 80, 37, 243, 162, 141, 188, 54, 143, 243, 137, 50, 42, 52, 15, 56, 9, 11, 54, 3, 5, 61];
   ````
2. Find Leaf Node in Binary Tree
   
   ````
   Leaf Nodes in tree :  [
	   5,  11,  42,  52,  54,
	  61, 137, 143, 188, 243
	]
	Print Minmum vlaue in tree :  3
	Print Maximum vlaue in tree :  243
	Print Maximum Height in tree :  7
	Print Minmum Height in tree :  1
   ````

#### Depth First Search in Binary Tree

3. InOrder Traversal Demo : 
   ````
   InOrder Traversal :  [
    	3, 5, 9, 11, 15, 37, 42, 50, 52, 54, 54, 56, 57, 61, 80, 99, 137, 141, 143, 162, 188, 218, 243, 243 ]
	Left ->  Root  -> Right
   ````
4. PreOrder Traversal Demo :
   ````
   PreOrder Traversal :  [
            218, 99, 57, 37, 15, 9, 3, 5, 11, 54, 50, 42, 52, 56, 54, 80, 61, 162, 141, 137, 143,188, 243, 243 ]
	Root ->  Left  -> Right
   ````
5. PostOrder Traversal Demo :
   ````
   PreOrder Traversal :  [
    	5, 3, 11, 9, 15, 42, 52, 50, 54, 56, 54, 37, 61, 80, 57, 137, 143, 141, 188, 162, 99, 243, 243, 218 ]
	Left  -> Right -> Root
   ````
