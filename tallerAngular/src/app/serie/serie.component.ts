import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
import { SerieDetail } from './serie-detail';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<SerieDetail> = [];
  promedioTemporadas = 0;

  selectedSerie!: SerieDetail;
  selected: Boolean = false;

  constructor(private serieService: SerieService) {
  }

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

  onSelected(serie: SerieDetail): void {
    this.selectedSerie = serie;
    this.selected = true;
  }

  ngOnInit() {
    this.getSeries();
  }

}
