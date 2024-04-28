import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FooterComponent } from '../footer/footer.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NzDrawerModule,
    FooterComponent,
    NzMenuModule,
    RouterModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  visible = false;
  rutas: any = [
    {
      ruta: "/",
      name: "inicio",
    },
    {
      ruta: "/postres",
      name: "postres",
    },
    {
      ruta: "/tortas",
      name: "tortas",
    },
    {
      ruta: "/cheesecake",
      name: "cheesecake",
    },
    {
      ruta: "/baldes",
      name: "baldes",
    },
    {
      ruta: "/contacto",
      name: "contacto",
    }
  ];

  constructor() { }
}
