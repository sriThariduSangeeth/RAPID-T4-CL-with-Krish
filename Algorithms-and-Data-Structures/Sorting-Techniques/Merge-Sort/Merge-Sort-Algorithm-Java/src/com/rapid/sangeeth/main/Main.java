package com.rapid.sangeeth.main;

import com.rapid.sangeeth.arraySort.MergeSort;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Merge-Sort-Algorithm-Java
 */
public class Main {

    public static void main(String[] args) {

        Main main = new Main();
        main.sortIntArray();
    }

    private void sortIntArray(){
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        MergeSort ob = new MergeSort();
        System.out.println("Given Array");
        ob.printArray(arr);


        ob.sort(arr, 0, arr.length - 1);

        System.out.println("\nSorted array");
        ob.printArray(arr);
    }
}
