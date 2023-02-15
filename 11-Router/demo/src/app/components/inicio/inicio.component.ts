import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((parametros) => {
      console.log(parametros);
    })
  }
}
