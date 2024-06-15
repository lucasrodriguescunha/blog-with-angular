import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    imports: [RouterModule, MenuTitleComponent]
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = 'images/photo1.png';
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";

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
