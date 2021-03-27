import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
import { LayoutConfigService } from '../../../../core/_base/layout';

declare var $: any;


@Component({
  selector: 'kt-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTBootstrapSelect : any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService) { }

  ngOnInit() {
    this.initData();
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
  }

  initData() {
    this.service.getTodayBirthdays().subscribe(res => {
      this.KTDatatableModal1 = function () {

        var subRemoteCumpleanerosHoy = function() {
          var el = $('#tabla-cumpleaneros-hoy');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',
              source: {
                data : res['data']
              },
              pageSize: 10, // display 20 records per page
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },
      
            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },
      
      
            pagination: true,
      
            search: {
              input: el.find('#generalSearch'),
            },
      
            // columns definition
            columns: [
              {
                field: 'foto',
                title: 'Foto',
                template: function(row) {
                  var number = row.foto;
                  var user_img = number + '.jpg';
                  var output;
                  output = `
                    <div class="kt-user-card-v2">
                      <div class="kt-user-card-v2__pic">
                        <img src="assets/funcionarios/` + user_img + `" class="m-img-rounded kt-marginless" alt="photo">
                      </div>
                    </div>`;
                  return output;
                },
              }, {
                field: 'nom_func',
                title: 'Nombre',
              }, {
                field: 'cargo_func',
                title: 'Cargo',
                
              }, {
                field: 'ci_func',
                title: 'CI',
                width: 80,
                
              }, {
                field: 'area_func',
                title: 'Area',
              }, {
                field: 'fecha_cumple',
                title: 'Cumpleaños',
              }, {
                field: 'mes',
                title: 'Mes',
                autoHide: false,
              }],
          });
      
        };


        return {
          // public functions
          init: function () {

            subRemoteCumpleanerosHoy();
          }
        };
      }();
      this.KTDatatableModal1.init();
    });

    this.service.getBirthdays().subscribe(res => {
      this.KTDatatableModal2 = function () {

        var subRemoteCumpleaneros = function () {
          var el = $('#tabla-cumpleaneros');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',
              source: {
                data : res['data']
              },
              pageSize: 10, // display 20 records per page
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },

            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },


            pagination: true,

            search: {
              input: el.find('#generalSearch'),
            },

            // columns definition
            columns: [
              {
                field: 'nom_func',
                title: 'Nombre',
              }, {
                field: 'cargo_func',
                title: 'Cargo',

              }, {
                field: 'ci_func',
                title: 'CI',
                width: 80,

              }, {
                field: 'area_func',
                title: 'Area',
              }, {
                field: 'fecha_cumple',
                title: 'Cumpleaños',
              }, {
                field: 'mes',
                title: 'Mes',
                autoHide: false,
              }],
          });

        };

        return {
          // public functions
          init: function () {

            subRemoteCumpleaneros();
          }
        };
      }();
      this.KTDatatableModal2.init();
    });
  }
}
