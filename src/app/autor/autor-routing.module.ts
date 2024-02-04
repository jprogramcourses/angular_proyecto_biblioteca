import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutoresComponent } from "./autores/autores.component";

const autorRoutes: Routes = [
    {path: 'autores', component: AutoresComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(autorRoutes)
    ]
})
export class AutorRoutingModule{}