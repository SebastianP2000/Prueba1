import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  private infoCompleta: any;

  constructor(private http: HttpClient) {}

}
