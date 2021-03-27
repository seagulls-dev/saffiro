import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-prestamo-func',
  templateUrl: './prestamo-func.component.html',
  styleUrls: ['./prestamo-func.component.scss']
})
export class PrestamoFuncComponent implements OnInit {

  @ViewChild('chart', { static: true }) chart: ElementRef;
  KTBootstrapSelect : any;

  constructor() { }

  ngOnInit() {
    this.KTBootstrapSelect = function () {

      // Private functions
      var demos = function () {
        // minimum setup
        $('.kt-selectpicker').selectpicker();
      }

      return {
        // public functions
        init: function () {
          demos();
        }
      };
    }();
    this.KTBootstrapSelect.init();
    var chartData = {
      labels: ["Antepenúltimo mes", "Penútimo mes", "Último mes", "Promedio últimos 3"],
      datasets: [{
        //label: 'Dataset 1',
        "backgroundColor": [
          "rgb(70,205,98)", "rgb(70,205,98)", "rgb(70,205,98)", "rgb(54,134,251)"
        ],
        data: [
          9300, 10200, 9000, 9500
        ]
      }]
    };

    var chart = new Chart(this.chart.nativeElement, {
      type: 'horizontalBar',
      data: chartData,
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: true,
            stacked: true
          }]
        }
      }
    });
  }

}
