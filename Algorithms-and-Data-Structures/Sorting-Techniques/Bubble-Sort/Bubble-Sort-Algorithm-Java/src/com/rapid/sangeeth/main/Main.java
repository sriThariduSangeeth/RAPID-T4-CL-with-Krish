package com.rapid.sangeeth.main;

import com.rapid.sangeeth.arraySort.BubbleSort;
import com.rapid.sangeeth.linkedListSort.DataLinkedList;

import java.util.LinkedList;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Bubble-Sort-Algorithm-Java
 */
public class Main {

    public static void main(String[] args) {
        Main main = new Main();
        main.sortIntArray();
        main.sortLinkedList();
    }

    private void sortIntArray(){
        BubbleSort ob = new BubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before sort int Array :");
        ob.displayArry(arr);
        ob.sortAlgorithm(arr);
        System.out.println("Sorted array to Ascending Order :");
        ob.displayArry(arr);
    }

    private void sortLinkedList(){

        LinkedList<Integer> list = new LinkedList<Integer>();

        list.add(8);
        list.add(4);
        list.add(3);
        list.add(7);
        list.add(6);
        list.add(1);

        DataLinkedList dll = new DataLinkedList(list);
        System.out.println("Before sort LinkedList :");
        dll.displayArry();
        //sort list
        dll.sortAlgorithm();
        System.out.println("Sorted LinkedList to Ascending Order :");
        dll.displayArry();

    }
}
