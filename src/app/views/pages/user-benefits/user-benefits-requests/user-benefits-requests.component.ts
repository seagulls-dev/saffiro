import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'kt-user-benefits-requests',
  templateUrl: './user-benefits-requests.component.html',
  styleUrls: ['./user-benefits-requests.component.scss']
})
export class UserBenefitsRequestsComponent implements OnInit {

  @ViewChild('bar', { static: true }) bar: ElementRef;
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
    this.initBar();
  }

  initBar() {
    const chartData = {
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
    new Chart(this.bar.nativeElement, {
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
