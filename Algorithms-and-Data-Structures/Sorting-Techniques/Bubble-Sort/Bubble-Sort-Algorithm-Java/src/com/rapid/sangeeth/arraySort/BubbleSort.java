package com.rapid.sangeeth.arraySort;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Bubble-Sort-Algorithm-Java
 */
public class BubbleSort {

    // sort int array using inner for loop - O(n*n)
    // Ascending Order - swap
    public void sortAlgorithm(int[] arr){
        int n = arr.length;
        for (int i = 0; i < n-1; i++){
            for (int j = 0; j < n-i-1; j++){
                if (arr[j] > arr[j+1])
                {
                    // swap temp and arr[i]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public void displayArry(int arr[]){
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
}
