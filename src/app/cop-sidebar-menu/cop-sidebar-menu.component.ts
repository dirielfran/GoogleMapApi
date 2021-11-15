import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icontype: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: 'circulo/mapa',
    title: 'Circulo',
    icontype: 'pi-check',
    children:[
      {
        path: 'prueba',
        title: 'Prueba'
      },
      {
        path: 'prueba1',
        title: 'Prueba1'
      }
    ]
  },
  {
    path: 'rectangulo',
    title: 'Rectangulo',
    icontype: 'pi-amazon',
    children:[
      {
        path: 'mapInfo',
        title: 'Informacion'
      },
      {
        path: 'poligono',
        title: 'Poligono'
      }
    ]
  },
  {
    path: 'mapGroundOverlay',
    title: 'Overlay',
    icontype: 'pi-microsoft',
  },
  {
    path: 'mapInfo',
    title: 'MapInfo',
    icontype: 'pi-github',
  },
  {
    path: 'mapKml',
    title: 'Kml',
    icontype: 'pi-sliders-v',
  },
  {
    path: 'poligono',
    title: 'Poligono',
    icontype: 'pi-share-alt',
  },
  {
    path: 'polyline',
    title: 'Polyline',
    icontype: 'pi-google',
  },
  {
    path: 'trafico',
    title: 'Trafico',
    icontype: 'pi-android',
  },
  {
    path: 'eventos',
    title: 'Eventos',
    icontype: 'pi-twitter',
  },
  {
    path: 'agrupaciones',
    title: 'Agrupaciones',
    icontype: 'pi-chart-line',
  },
  {
    path: 'iconosVectoriales',
    title: 'Iconos Vectoriales',
    icontype: 'pi-cog',
  },
  {
    path: 'circulo/prueba',
    title: 'Servicio Ruta',
    icontype: 'pi-link',
  },
  {
    path: 'circulo/prueba2',
    title: 'Cambio de Ruta',
    icontype: 'pi-youtube',
  },  {
    path: 'iconosVectoriales',
    title: 'Iconos Vectoriales',
    icontype: 'pi-cog',
  },
  {
    path: 'circulo/prueba',
    title: 'Servicio Ruta',
    icontype: 'pi-link',
  },
  {
    path: 'circulo/prueba2',
    title: 'Cambio de Ruta',
    icontype: 'pi-youtube',
  }
]  

@Component({
  selector: 'app-cop-sidebar-menu',
  templateUrl: './cop-sidebar-menu.component.html',
  styleUrls: ['./cop-sidebar-menu.component.scss'],
})
export class CopSidebarMenuComponent implements OnInit {
  @ViewChild('sidebar') sidebar!:ElementRef<HTMLInputElement>;
  display: string= 'none';
  width: string= '4.3rem';
  bandera: boolean = false;  
  visibleSidebar: boolean= true;
  visibleSidebar1: boolean= false;

  public menuItems!: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  eventoHide(){
    this.display = 'inline-block !important'
    this.width = '15rem';
    this.bandera = false;
  }

  eventoShow(){
    this.bandera = true;
    this.display = 'none'
    this.width = '4.3rem';
  }

}
