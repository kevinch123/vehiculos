import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import {Router,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vehiculos-listar',
  standalone: true,
  imports: [NgFor, RouterModule],
templateUrl: './vehiculos-listar.component.html',
  styleUrl: './vehiculos-listar.component.css'
})
export class VehiculosListarComponent implements OnInit {
  vehiculos: Array<Vehiculo>=[];
  constructor(private routerPath: Router,private vehiculosService:VehiculosService){

  }

  ngOnInit(): void{
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.vehiculosService.obtenerVehiculos().subscribe(vs =>{
      this.vehiculos=vs;
      console.log(this.vehiculos)
    });
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}

