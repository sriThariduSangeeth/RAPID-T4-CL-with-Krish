# Selection Sort

<ul>
  <li>Selection Sort is one of the easier sorting algorithm to understand and implement.</li>
  <li>This algorithm splits the array in two parts:</li>
  <ul>
    <li>Sorted</li>
    <li>Unsorted</li>
  </ul>
  <li>The Sorted part is at the beginning of the array and Unsorted part afterwards.</li>
  <li>Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element. At the end of the pass we swap smallest element to the sorted array.</li>
  <li>It has O(n2) time complexity.</li>
</ul>

<p align="center">
  <img src="https://stackabuse.s3.amazonaws.com/media/selection-sort-in-javascript-1.gif" alt="selection sort visualization">
</p>

> Pseudocode

````
procedure selection sort 
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i    
  
      /* check the element to be minimum */

      for j = i+1 to n 
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for
	
end procedure
````
