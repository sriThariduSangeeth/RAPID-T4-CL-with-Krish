# Binary Search

<p>
  Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer.
  Binary search looks for a particular item by comparing the middle most item of the collection. If a match occurs, then the index of item is returned.
  If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero.
</P>

> How Binary Search Works?

- This array should be a sorted array before apply binary searching.

<img alt="binary search" width="450" height="200"  src="https://stackabuse.s3.amazonaws.com/media/binary-search-in-java-1.gif">


> Pseudocode

````
Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set lowerBound = 1
   Set upperBound = n 

   while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
   
      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
      
      if A[midPoint] < x
         set lowerBound = midPoint + 1
         
      if A[midPoint] > x
         set upperBound = midPoint - 1 

      if A[midPoint] = x 
         EXIT: x found at location midPoint
   end while
   
end procedure
````
