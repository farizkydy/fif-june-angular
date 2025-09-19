import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  constructor(private router: Router) {

  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToDetail() {
    const crediturId = '28'
    this.router.navigate(['/creditur', crediturId]);
  }
}
