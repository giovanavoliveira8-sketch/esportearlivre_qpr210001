import { Routes } from '@angular/router';

import { AtletaComponentComponent } from './component/atleta-component/atleta-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CadastroCorridasComponent } from './component/cadastro-corridas/cadastro-corridas.component';
import { AtletaListComponent } from './component/atleta-list/atleta-list.component';
import { CorridaComponent } from './component/corrida/corrida.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },

    {
        path: "home",
        component: HomeComponentComponent
    },

    {
        path: "cadastroatleta",
        component: AtletaComponentComponent
    },

    {
        path: "cadastrocorrida",
        component: CadastroCorridasComponent
    },
 
    {
        path:"cadastroAtleta/:id",
        component: AtletaComponentComponent,
    },

    {
        path:"listaAtleta",
        component: AtletaListComponent,
    },

    {
        path: "corridadisponivel",
        component: CorridaComponent
    }

];
