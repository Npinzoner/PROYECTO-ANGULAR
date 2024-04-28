import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import ErrorComponent from './pages/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // BrowserModule,
    // FormsModule,
    // HttpClientModule,
    // BrowserAnimationsModule,
    CommonModule,
    // NzGridModule,
    NzLayoutModule,
    // NzButtonModule,
    // NzIconModule,
    // NzFormModule,
    // NzInputModule,
    // ReactiveFormsModule,
    // NzResultModule,
    // NzDropDownModule,
    // NzCarouselModule,
    // NzMenuModule,
    // NgxSpinnerModule,
    // NzCardModule,
    // NzSliderModule,
    // GoogleMapsModule,
    // NzToolTipModule,
    // NzSelectModule,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
