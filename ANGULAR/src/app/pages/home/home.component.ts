import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    RouterModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  form: FormGroup;
  imgList: any = [
    {
      ruta: "/",
      img: "/assets/img/brownie.jpg",
      name: 'brownie'
    },
    {
      ruta: "/",
      img: "/assets/img/postre.jpg",
      name: 'postre'
    },
    {
      ruta: "/",
      img: "/assets/img/trufa.png",
      name: 'trufa'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [null, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required])],
      phone: [null, Validators.compose([
        Validators.pattern(/^[0-9]\d*$/),
        Validators.required])],
      email: [null, Validators.compose([
        Validators.email,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        Validators.required])],
      message: [null, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required])],
    });
  }

  submit() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].markAsTouched();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
