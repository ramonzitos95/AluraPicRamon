import { Http, Headers } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';   

@Component({
    moduleId: module.id,
    selector:'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent{

    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http){

        this.http = http;
    }

    cadastrar(event){

        event.preventDefault(); //Não submete o formulário do modo padrão
        console.log(this.foto);

        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers } )
        .subscribe(() => {
            this.foto = new FotoComponent();
            console.log('Foto salva com sucesso');
        }, erro => console.log(erro));
    }
}