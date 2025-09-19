import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-creditur',
  standalone: true,
  imports: [],
  templateUrl: './detail-creditur.component.html',
  styleUrl: './detail-creditur.component.scss'
})
export class DetailCrediturComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    const crediturId = this.route.snapshot.paramMap.get('creditur');
    const id  = this.route.snapshot.paramMap.get('id');
    const slugArr = ['fariz', 'rizky']
    // ngebaca path apakah id yang dikasih itu ada di dalam slugArr. kalau ga ada, arahin ke 404. tp kalau ada dia masuk ke sini
    if (!slugArr.includes(crediturId || '')) {
      this.router.navigate(['/404']);
    }
    this.router.navigate(['/fafa/fafa']);
    console.log('crediturId', crediturId);
    console.log('id', id);
  }
}
