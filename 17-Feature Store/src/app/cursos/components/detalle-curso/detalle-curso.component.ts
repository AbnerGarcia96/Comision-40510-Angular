import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute 
  ){
    
  }

  ngOnInit(){
    this.route.queryParamMap.subscribe((parametros) => {
      console.log(parametros);
    })
  }
}
