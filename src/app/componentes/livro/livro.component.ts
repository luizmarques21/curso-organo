import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    imagem: "https://tse3.mm.bing.net/th/id/OIP.tUjRsJgb-ECdvn9460uQFQAAAA?pid=Api&P=0&h=180"
  }
}
