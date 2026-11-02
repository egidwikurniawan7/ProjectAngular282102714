import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular282102714');
  @HostListener('document:click', ['$event.target'])
  onClick(t: any) {
    const b = document.body.classList;
    if (t.closest('[data-lte-toggle="sidebar"]')) b.toggle('sidebar-open');
    else if (!t.closest('.app-sidebar') || t.closest('.app-sidebar a[href]:not([href="#"])')) b.remove('sidebar-open');
  }
}
