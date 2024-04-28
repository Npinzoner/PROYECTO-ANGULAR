import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAffixModule } from 'ng-zorro-antd/affix';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,    
    RouterModule,
    NzToolTipModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzAffixModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() type: 'one' | 'two' | unknown;
  contactList: any = [
    {
      type: "contacto",
      name: "55555"
    },
    {
      type: "horario",
      name: "8:00 am - 5pm"
    },
    {
      type: "correo",
      name: "aperire@gmail.com"
    }
  ];
  followList: any = [   
    {
      name: "Instagram",
      img: "assets/img/instagram.png",
    },
    {
      name: "Facebook",
      img: "assets/img/facebook.svg",
    }
  ];
}
