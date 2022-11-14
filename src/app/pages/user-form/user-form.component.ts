import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListarComponent } from '../listar/listar.component';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  //propiedad para esconder el password en el formulario
  hide=true;
  
  //se crea una variable userForm del tipo FormGroup que guardara las variables de entrada del formulario
  userForm!: FormGroup;

  actionBtn: string = 'Guardar';
  constructor(private fb:FormBuilder,private userSvc: UsuariosService, private router: Router, @Inject(MAT_DIALOG_DATA)public editData: any , private dialogRef: MatDialogRef<ListarComponent>) { }   


  ngOnInit(): void {  

    this.userForm = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]],
    role: ['',[Validators.required]],   
  });

    if(this.editData){
      this.actionBtn = 'Actualizar';
      this.userForm.controls['username'].setValue(this.editData.username);
      this.userForm.controls['password'].setValue(this.editData.password);
      this.userForm.controls['role'].setValue(this.editData.role);
    }
  }
  
  

  crearUsuario(){
    if(this.userForm.valid){
      this.userSvc.crearUsuario(this.userForm.value).subscribe({
        next:(res)=>{
          alert("Usuario Ingresado con exito")
          this.dialogRef.close('save');
           //console.log(this.userForm.value);
        },
        error:()=>{    
          alert("Error al ingresar el usuario")
        }           
       })
      }

    }

    actualizarUsuario(){
      if(this.userForm.valid){
        this.userSvc.update(this.userForm.value,this.editData.username).subscribe({
          next:(res)=>{
            alert("Usuario Actualizado con exito")
            this.dialogRef.close('Actualizar');
             //console.log(this.userForm.value);
          },
          error:()=>{    
            alert("Error al actualizar el usuario")
          }           
         })
    }
  
  }
 }
  
  