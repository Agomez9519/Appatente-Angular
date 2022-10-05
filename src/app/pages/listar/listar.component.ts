import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserI } from 'src/app/auth/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  
  usuarios: UserI[];

  dataSource: any;

  columnsToDisplay = ['username', 'createdAt','acciones'];

  constructor(private usuarioService: UsuariosService) { }

  //para que el componente inicie listando los usuarios, se ejecutar en el metodo ngOnInit()
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  

   obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(datos=>{
      this.usuarios = datos,
      this.dataSource = new MatTableDataSource(this.usuarios);
      console.log(this.usuarios);
  })
  }

    borrarUsuario(username: string):void{
    this.usuarioService.delete(username).subscribe(res=>{
      this.obtenerUsuarios();
    })
    }
}


