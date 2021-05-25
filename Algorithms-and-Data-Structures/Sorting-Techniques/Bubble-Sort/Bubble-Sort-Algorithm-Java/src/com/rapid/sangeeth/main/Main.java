package com.rapid.sangeeth.main;

import com.rapid.sangeeth.sort.BubbleSort;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Bubble-Sort-Algorithm-Java
 */
public class Main {

    public static void main(String[] args) {
        Main main = new Main();
        main.sortIntArray();
    }

    private void sortIntArray(){
        BubbleSort ob = new BubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before sort :");
        ob.displayArry(arr);
        ob.sortAlgorithm(arr);
        System.out.println("Sorted array to Ascending Order :");
        ob.displayArry(arr);
    }
}
