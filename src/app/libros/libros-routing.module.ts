import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LibrosListComponent } from "./libros-list/libros-list.component";
import { LibroDetalleComponent } from "./libro-detalle/libro-detalle.component";
import { ErrorComponent } from "../error/error.component";
import { FormLibroComponent } from "./form-libro/form-libro.component";

const libroRoutes: Routes = [
    {path: '', component: LibrosListComponent},
    {path: 'libros', component: LibrosListComponent},
    {path: 'libro/:titulo', component: LibroDetalleComponent},
    { path: 'nuevolibro', component: FormLibroComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(libroRoutes)
    ]
})
export class LibrosRoutingModule {}