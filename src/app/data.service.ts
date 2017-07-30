import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

    dataSource2 = './assets/data2.csv';

    getData() {
          return this.dataSource2;
    }
}