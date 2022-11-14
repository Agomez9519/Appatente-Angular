import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserI } from 'src/app/auth/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit, OnDestroy, AfterViewInit {

  
  usuarios: UserI[];

  dataSource: any;

  columnsToDisplay = ['username', 'createdAt','acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuariosService,private dialog:MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  //para que el componente inicie listando los usuarios, se ejecutar en el metodo ngOnInit()
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  

   obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.usuarios);
  }})
  }

    borrarUsuario(username: string):void{
    this.usuarioService.delete(username).subscribe(res=>{
      this.obtenerUsuarios();
    })
    }

    editDialog(row:any){
      this.dialog.open(UserFormComponent, {
        width: '30%',
        data:row
      })
    }

    openDialog() {
      this.dialog.open(UserFormComponent, {       
      }).afterClosed().subscribe(val => {
        if(val === 'save'){
          this.obtenerUsuarios();
        }
      });
    }
  }


