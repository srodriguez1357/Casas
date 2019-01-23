import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosPage } from '../productos/productos';
import { CarritoPage } from '../carrito/carrito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page = ProductosPage;
  Carr= CarritoPage;
  carrito=[];
  productos=[
    {
      id: 0,
      imagen:'../assets/imgs/C1.jpg',
      descripcion:'Finca rústica',
      precio:'3.500.000 €',
      ubi: 'Barraco',

        productos2: {
          cuartos: '11',
          banos: '11',
          area: '980 m²',
        }

    },

    {
      id: 1,
      imagen:'../assets/imgs/C2.jpg',
      descripcion:'Castillo en Torremanzanas',
      precio:'2.650.000 €',
      ubi:'LAlacantí, Alicante' ,

        productos2: {
          cuartos:'5' ,
          banos: '3',
          area: '380 m²',
        }

    },

    {
      id: 2,
      imagen:'../assets/imgs/C3.jpg',
      descripcion:'Cortijo en Los Cigarrales-La Bastida',
      precio:'5.105.000 €',
      ubi: 'Toledo',

        productos2: {
          cuartos:'7' ,
          banos: '5',
          area:'660 m²' ,
        }

    },

    {
      id: 3,
      imagen:'../assets/imgs/C4.jpg',
      descripcion:'Castillo en calle Iglesia',
      precio:'240.000 €',
      ubi: 'Condado de Treviño',

        productos2: {
          cuartos: '6',
          banos: '1',
          area: '801 m² ',
        }

    },

    {
      id: 4,
      imagen:'../assets/imgs/C5.jpg',
      descripcion:'Palacio en calle Sancho y Gil',
      precio:'280.000 €',
      ubi: 'Morés',

        productos2: {
          cuartos: '7',
          banos:'5' ,
          area:'1.600 m²' ,
        }

    },

    {
      id: 5,
      imagen:'../assets/imgs/C6.jpg',
      descripcion:'Palacio en calle Goya',
      precio:'300.000 €',
      ubi:'Borja ' ,

        productos2: {
          cuartos:'8' ,
          banos: '3',
          area: '830 m² ',
        }

    },

    {
      id: 6,
      imagen:'../assets/imgs/C7.jpg',
      descripcion:'Palacio en plaza Mayor',
      precio:'300.000 €',
      ubi:'Villavicencio de los Caballeros' ,

        productos2: {
          cuartos:'17' ,
          banos:'3' ,
          area:'1.100 m²',
        }

    },

    {
      id: 7,
      imagen:'../assets/imgs/C8.jpg',
      descripcion:'Castillo en calle Castillo de los Velasco',
      precio:'2.750.000 €',
      ubi:'Valle de Mena',

        productos2: {
          cuartos:'5',
          banos:'8',
          area:'936 m²',
        }

    },

    {
      id: 8,
      imagen:'../assets/imgs/C9.jpg',
      descripcion:'Castillo en Laval',
      precio:'1 690 000 €',
      ubi: 'Pays de la Loire',

        productos2: {
          cuartos: '8',
          banos: '4',
          area: '600 m²',
        }

    },

    {
      id: 9,
      imagen:'../assets/imgs/C10.jpg',
      descripcion:'Castillo en Nueva Aquitania',
      precio:'1 450 000 €',
      ubi:'Nueva Aquitania',

        productos2: {
          cuartos:'8',
          banos:'4',
          area:'1 000 m²',
        }

    }

  ];

  

  constructor(public navCtrl: NavController) {
    

  }
  clickVer(p)
  {
    this.navCtrl.push(this.page, {producto: p, carrito:this.carrito});  }

clickCarr()
{
  this.navCtrl.push(this.Carr, {carrito: this.carrito})
}
  }
