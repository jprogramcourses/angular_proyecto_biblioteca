import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UsuariosComponent } from './core/usuarios/usuarios.component';

const appRoutes: Routes = [
    { path: 'usuarios', component: UsuariosComponent},
    { path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}