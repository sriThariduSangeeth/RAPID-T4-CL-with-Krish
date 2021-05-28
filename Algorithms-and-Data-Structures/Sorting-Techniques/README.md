<h3 align="center">:rotating_light: :construction:&ensp;&ensp;Work In Progress&ensp;&ensp;:construction: :rotating_light:</h3>

# Algorithms and Data Structures
## Sorting Techniques

<ul>
<li>Sorting Techniques</li>
	<ul>
	<li><a href="https://github.com/sriThariduSangeeth/RAPID-T4-CL/tree/master/Algorithms-and-Data-Structures/Sorting-Techniques/Bubble-Sort">Bubble Sort</a></li>
	<li><a href="https://github.com/sriThariduSangeeth/RAPID-T4-CL/tree/master/Algorithms-and-Data-Structures/Sorting-Techniques/Merge-Sort">Merge Sort</a></li>
	<li><a href="https://github.com/sriThariduSangeeth/RAPID-T4-CL/tree/master/Algorithms-and-Data-Structures/Sorting-Techniques/Quick-Sort">Quick Sort</a></li>
	<li><a href="https://github.com/sriThariduSangeeth/RAPID-T4-CL/tree/master/Algorithms-and-Data-Structures/Sorting-Techniques/Selection-Sort">Selection Sort</a></li>
	</ul>
</ul>


> Sort numbers in an array in ascending order:
````
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
````
> Sort numbers in an array in descending order:
````
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
````
- if you want to order lower cases and upper cases strings. ** sort().reverse() ** method not working.

````
var points = ["a","b","c","A","B","Z"];
points.sort().reverse();
````
````
points.sort((a,b)=>b.localeCompare(a))
````
