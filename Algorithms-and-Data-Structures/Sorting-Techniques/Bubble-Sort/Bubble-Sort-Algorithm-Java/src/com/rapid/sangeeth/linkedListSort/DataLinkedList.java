package com.rapid.sangeeth.linkedListSort;

import javax.xml.soap.Node;
import java.util.LinkedList;

/**
 * @author dtsangeeth
 * @created 25 / 05 / 2021
 * @project Bubble-Sort-Algorithm-Java
 */
public class DataLinkedList {


    private Node head;
    private int size;

    LinkedList<Integer> lsit = new LinkedList<Integer>();

    public DataLinkedList(LinkedList arr){
        this.lsit = arr;
        this.size = arr.size();
    }

    public void sortAlgorithm(){

        if (size > 1) {
            for (int i = 0; i < size; i++ ) {
                for (int j = 0; j < size - 1; j++) {
                    int left= this.lsit.get(j);
                    int right= this.lsit.get(j+1);
                    if (left > right) {
                        int temp = this.lsit.remove(j+1);
                        this.lsit.add(j,temp);
                    }
                }
            }
        }
    }

    public void displayArry(){
        for (int x: this.lsit) {
            System.out.print(x+" ");
        }
        System.out.println();
    }
}
