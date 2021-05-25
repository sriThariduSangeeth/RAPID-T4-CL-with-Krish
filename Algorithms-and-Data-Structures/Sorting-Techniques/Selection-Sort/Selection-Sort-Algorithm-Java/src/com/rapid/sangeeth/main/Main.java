package com.rapid.sangeeth.main;

import com.rapid.sangeeth.arraySort.SelectionSort;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Selection-Sort-Algorithm-Java
 */
public class Main {

    public static void main(String[] args) {
        Main main = new Main();
        main.SortIntArry();

    }

    private void SortIntArry(){
        SelectionSort ob = new SelectionSort();
        int arr[] = {64,25,12,22,11};
        ob.sort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
