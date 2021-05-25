package com.rapid.sangeeth.main;

import com.rapid.sangeeth.arraySort.QuickSort;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Quick-Sort-Algorithm-Java
 */
public class Main {

    public static void main(String[] args) {
        Main main = new Main();
        main.sortIntArray();
    }

    private void sortIntArray(){
        int[] arr = { 10, 7, 8, 9, 1, 5 };
        int n = arr.length;

        QuickSort ob = new QuickSort();
        ob.quickSort(arr, 0, n - 1);
        System.out.println("Sorted array: ");
        ob.printArray(arr, n);
    }

}
