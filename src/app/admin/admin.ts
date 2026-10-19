import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header,Sidebar,Content,Footer,RouterModule],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',

})
export class Admin {}
