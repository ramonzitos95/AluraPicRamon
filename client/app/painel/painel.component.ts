import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent{
    @Input() titulo: string;

    constructor(){
        
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + '...' : this.titulo;
    }
}