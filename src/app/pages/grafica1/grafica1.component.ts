import { Component } from '@angular/core';

import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {


  
public labels1: string[] = ['Pan', 'Refrescos', 'Pizza'];

public data1 = [
  [10, 35, 100],

];



}
