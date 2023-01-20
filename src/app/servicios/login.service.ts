import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth, Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_LOGIN: string = 'https://dummyjson.com/auth/login';
  private infoUser!: auth | null;

  constructor(private http: HttpClient,
              private router: Router,
               ) { }

  public autenticar({username, password}: Usuario){
    this.http.post<auth>(this.URL_LOGIN, {
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .subscribe(async (datos)=> {
      this.infoUser = datos;
      console.log(this.infoUser);
      this.router.navigate(['/inicio']);
    })
  }

  public datosUsuario(){
    return this.infoUser;
  }



}
