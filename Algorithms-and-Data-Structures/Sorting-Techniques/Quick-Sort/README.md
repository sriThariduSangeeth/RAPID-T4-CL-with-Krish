# Quick sort

<ul>
  <li>Quick sort is an efficient sorting algorithm. It’s an in-place algorithm so it doesn’t take any auxilary space.</li>
  <li>First pick a random pivot point around which move all the smaller elements to it to the left of it and the bigger elements to the right of it.</li>
  <li>After getting the pivotIndex which is essentially the fixed position of that element, we find other pivotIndex by recusirvely calling this function.</li>
  <li>Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point, so that way it’s big O is O(nlogn).</li>
  <li>It’s space complexity is O(logn).</li>
</ul>
 
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif" alt="Quick sort in action" width="280" height="214">
</p>

> Quick Sort Pivot Pseudocode

````
function partitionFunc(left, right, pivot)
   leftPointer = left
   rightPointer = right - 1

   while True do
      while A[++leftPointer] < pivot do
         //do-nothing            
      end while
		
      while rightPointer > 0 && A[--rightPointer] > pivot do
         //do-nothing         
      end while
		
      if leftPointer >= rightPointer
         break
      else                
         swap leftPointer,rightPointer
      end if
		
   end while 
	
   swap leftPointer,right
   return leftPointer
	
end function
````

> Quick Sort Pseudocode

````
procedure quickSort(left, right)

   if right-left <= 0
      return
   else     
      pivot = A[right]
      partition = partitionFunc(left, right, pivot)
      quickSort(left,partition-1)
      quickSort(partition+1,right)    
   end if		
   
end procedure
````
