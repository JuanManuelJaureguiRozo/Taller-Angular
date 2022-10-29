import { Component, OnInit } from '@angular/core';
import { dataSeries } from './dataSeries';
import { Serie } from './serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedioTemporadas = 0;

  constructor() { }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  calcularPromedioTemporadas(series: Array<Serie>): number {
    let promedio = 0;
    let totalTemporadas = 0;
    for (let serie of series) {
      totalTemporadas += serie.seasons;
    }
    promedio = totalTemporadas / series.length;
    return promedio;
  }

  ngOnInit() {
    this.series = this.getSerieList();
    this.promedioTemporadas = this.calcularPromedioTemporadas(this.series);
  }

}
