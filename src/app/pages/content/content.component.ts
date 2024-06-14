import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = 'images/photo1.png';
  @Input() cardTitle: string =
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Nullam rhoncus urna ligula, consectetur dapibus velit dic';
  @Input() cardDescription: string =
    'm rhoncus urna ligula, consectetur dapibus velit dictum a. Praesent urna leo, elementum vel arcu vel, suscipit dictum tortor. In hac habitasse platea dictumst. Donec fringilla ipsum in libero placerat mattis. Fusce cursus vitae dui vitae hendrerit. Pellentesque dapibus dolor sit amet diam viverra, et eleifend massa scelerisque. Ut lacinia condimentum neque nec vestibulum. m rhoncus urna ligula, consectetur dapibus velit dictum a. Praesent urna leo, elementum vel arcu vel, suscipit dictum tortor. In hac habitasse platea dictumst. Donec fringilla ipsum in libero placerat mattis. Fusce cursus vitae dui vitae hendrerit. Pellentesque dapibus dolor sit amet diam viverra, et eleifend massa scelerisque. Ut lacinia condimentum neque nec vestibulum.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.setValuesToComponent(id);
        }
      },
      error: (err) => {
        console.error('Erro ao obter parâmetros da rota', err);
      },
    });
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find((article) => article.id === id);
    if (result) {
      this.photoCover = result.photo;
      this.cardTitle = result.title;
      this.cardDescription = result.description;
    }
  }
}
