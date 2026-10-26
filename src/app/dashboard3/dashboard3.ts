import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  imports: [Header,Sidebar,Footer,RouterModule],
  selector: 'app-dashboard3',
  styleUrl: './dashboard3.css',
  templateUrl: './dashboard3.html',
})
export class Dashboard3 {}
