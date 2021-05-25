# Bubble Sort

<ul>
  <li>Bubble Sort is a sorting algorithm which sorts or bubbles the largest number as last element at the end of each pass.</li>
  <li>We compare each element to the one ahead of it, if the element before is smaller, we swap their places.</li>
  <li>Bubble Sort’s time complexity is O(n2).</li>
</ul>

<p align="center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif" alt="Bubble sort in action" width="300" height="180">
</p>

> Algorithm

````
begin BubbleSort(list)

   for all elements of list
      if list[i] > list[i+1]
         swap(list[i], list[i+1])
      end if
   end for
   
   return list
   
end BubbleSort

````

> Pseudocode

````
procedure bubbleSort( list : array of items )

   loop = list.count;
   
   for i = 0 to loop-1 do:
      swapped = false
		
      for j = 0 to loop-1 do:
      
         /* compare the adjacent elements */   
         if list[j] > list[j+1] then
            /* swap them */
            swap( list[j], list[j+1] )		 
            swapped = true
         end if
         
      end for
      
      /*if no number was swapped that means 
      array is sorted now, break the loop.*/
      
      if(not swapped) then
         break
      end if
      
   end for
   
end procedure return list
````
