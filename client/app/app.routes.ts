import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);