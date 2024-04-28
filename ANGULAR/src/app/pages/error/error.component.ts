import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzResultModule,
    NzGridModule,
    NzButtonModule,
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export default class ErrorComponent {

}
