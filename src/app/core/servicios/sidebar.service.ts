import { Injectable } from '@angular/core';
import { SidebarComponentData } from '../modelos/sidebar/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebars: SidebarComponentData[] = [];
  constructor() { }

  public add(sidebar: SidebarComponentData): void {
    this.sidebars.push(sidebar);
  }

  public remove(id: string): void {
    this.sidebars = this.sidebars.filter(x => x.id !== id);
  }
  public open(id: string): void {
    const sidebar: any = this.sidebars.filter(x => x.id === id)[0];
    sidebar.open();
  }
  public close(id: string): void {
    const sidebar: any = this.sidebars.filter(x => x.id === id)[0];
    sidebar.close();
  }
}
