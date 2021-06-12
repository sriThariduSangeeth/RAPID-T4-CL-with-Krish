import { Injectable } from "@nestjs/common";

@Injectable()
export class QuickSort {

    sort = (arry : Array<number>) => {
        if (arry.length === 0) {
            return [];
        } else {
            const pivotValue = arry[0];
        // Sort elements into three piles
            let lesser = [];
            let equal = [];
            let greater = [];
            for (let e of arry) {
                if (e > pivotValue) {
                    lesser.push(e);
                } else if (e < pivotValue) {
                    greater.push(e);
                } else {
                    equal.push(e);
                }
            }
            return [...this.sort(lesser), ...equal, ...this.sort(greater)];
        }
    }
}