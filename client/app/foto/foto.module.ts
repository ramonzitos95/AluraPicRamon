import { FiltroPorTitulo } from './fotos.pipe';
import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ],
    exports: [ FotoComponent, FiltroPorTitulo ]
})

export class FotoModule{

}