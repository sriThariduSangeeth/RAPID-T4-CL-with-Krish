# Merge Sort

<ul>
  <li>Merge Sort is a classic divide and conquer problem.</li>
  <li>The following steps are involved :</li>
  <ul>
    <li>Divide: We break the array from the middle using recusion until we’re left with 1 element. </li>
    <li>Conquer: Then we sort these small arrays.</li>
    <li>Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.</li>
  </ul>
  <li>Time complexity of Merge Sort is O(n * log n).</li>
  <li>Space complexity of Merge Sort is O(log n).</li>
</ul>

<p align="center" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" alt="Merge Sort in action" width="300" height="180">
</p>

> Example :

<ul>
  <li>Initially we have an array of 6 unsorted integers Arr(6, 5, 3, 1, 8, 7, 2, 4)</li>
  <li>We split the array into two halves Arr1 = (6, 5, 3, 1) and Arr2 = (8, 7, 2, 4).</li>
  <li>Again, we divide them into two halves: Arr3 = (6, 5) and Arr4 = (3, 1) and Arr5 = (8, 7) and Arr6 = (2, 4)</li>
  <li>We will now compare the elements in these sub arrays in order to merge them.</li>
</ul>
