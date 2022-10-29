import { Component, OnInit } from '@angular/core';
import { dataSeries } from './dataSeries';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedioTemporadas = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series
      this.calcularPromedioTemporadas(this.series);
    });
  }

  calcularPromedioTemporadas(series: Array<Serie>) {
    let suma: number = 0;
    let promedio: number = 0;

    series.forEach(serie => {
      suma += serie.seasons;
    });

    promedio = suma / series.length;
    this.promedioTemporadas = promedio;
  }

  ngOnInit() {
    this.getSeries();
  }

}
