import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http:HttpClient) { }

    obtenerVehiculos():Observable<Vehiculo[]>{
      return this.http.get<Vehiculo[]>('http://127.0.0.1:8000/api/vehiculos/listar');
    }
    crearVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
      return this.http.post<Vehiculo>('http://127.0.0.1:8000/api/vehiculos/crear', vehiculo)
    }
}

