import { Routes } from '@angular/router';
import { VehiculosListarComponent } from './vehiculos/vehiculos-listar/vehiculos-listar.component';
import { VehiculosCreateComponent } from './vehiculos/vehiculos-create/vehiculos-create.component';

export const routes: Routes = [{
    path:'',
      component:VehiculosListarComponent
    },
    {
      path:'newvehiculo',
      component:VehiculosCreateComponent
    },

    {
        path:'vehiculos',
          component:VehiculosListarComponent
        },

  ];


