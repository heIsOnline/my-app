import { Injectable } from '@angular/core';
import { IData } from './data';

@Injectable()
export class DataService{

    getData(): IData[]{
          return  [
    {
        "technologies": "C#",
        "rating": 80
    },
    {
        "technologies": "C++",
        "rating": 30
    },
    {
        "technologies": "HTML",
        "rating": 42
    },
    {
        "technologies": "CSS",
        "rating": 43
    },
    {
        "technologies": "JS",
        "rating": 15
    },
    {
        "technologies": "ng",
        "rating": 18
    },
    {
        "technologies": "C",
        "rating": 27
    },
    {
        "technologies": "d3",
        "rating": 27
    }
];
    }
}