import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private router = inject(Router);
  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    // Cek URL saat pertama kali halaman dimuat
    this.checkRouteTheme(this.router.url);

    // Pantau setiap kali user berpindah halaman (router events)
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRouteTheme(event.urlAfterRedirects);
    });
  }

  private checkRouteTheme(url: string): void {
    // Jika URL mengandung kata 'dashboard2', ubah jadi dark. Selain itu light.
    if (url.includes('dashboard2')) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  }

  // Fungsi kalau user mau klik ganti tema manual dari dropdown navbar
  setTheme(selectedTheme: 'light' | 'dark'): void {
    this.theme = selectedTheme;
    document.documentElement.setAttribute('data-bs-theme', selectedTheme);
  }
}