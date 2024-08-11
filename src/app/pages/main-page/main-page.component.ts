import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { games } from '../../interface/interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  games:games[]=[
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    },
    {name:"Tik-Tak-Toe",
      image:"TicTakToe.png"
    }
  ]

}
