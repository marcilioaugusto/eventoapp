import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-evento',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  
  {
    path: 'add-evento',
    loadChildren: () => import('./add-evento/add-evento.module').then( m => m.AddEventoPageModule)
  },
  {
    path: 'add-eventos',
    loadChildren: () => import('./add-eventos/add-eventos.module').then( m => m.AddEventosPageModule)
  },
  {
    path: 'add-participante',
    loadChildren: () => import('./add-participante/add-participante.module').then( m => m.AddParticipantePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
