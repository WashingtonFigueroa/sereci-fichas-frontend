import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule, MdToolbarModule, MdTooltipModule, MdMenuModule, MdTabsModule, MdListModule, MdIconModule,
    MdSlideToggleModule, MdRadioModule, MdChipsModule, MdSelectModule
} from '@angular/material';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { VisorComponent } from './visor/visor.component';
import {RouterModule, Routes} from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { VideoComponent } from './video/video.component';
import { FichaIndexComponent } from './ficha/ficha-index/ficha-index.component';
import { FichaShowComponent } from './ficha/ficha-show/ficha-show.component';
import { FichaComponent } from './ficha/ficha.component';
import {HttpModule} from '@angular/http';
import { NoticiasIndexComponent } from './noticias/noticias-index/noticias-index.component';
import { NoticiasShowComponent } from './noticias/noticias-show/noticias-show.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasCreateComponent } from './noticias/noticias-create/noticias-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoticiasService} from './noticias/noticias.service';
import { FichaCreateComponent } from './ficha/ficha-create/ficha-create.component';
import { FichaItemComponent } from './ficha/ficha-item/ficha-item.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { CategoriaIndexComponent } from './categoria/categoria-index/categoria-index.component';
import { CategoriaShowComponent } from './categoria/categoria-show/categoria-show.component';
import {CategoriaService} from './categoria/categoria.service';
import {FichaService} from './ficha/ficha.service';
import { AsignacionCategoriaComponent } from './asignacion-categoria/asignacion-categoria.component';
import { AsignacionCategoriaCreateComponent } from './asignacion-categoria/asignacion-categoria-create/asignacion-categoria-create.component';
import { AsignacionCategoriaIndexComponent } from './asignacion-categoria/asignacion-categoria-index/asignacion-categoria-index.component';
import { AsignacionCategoriaShowComponent } from './asignacion-categoria/asignacion-categoria-show/asignacion-categoria-show.component';
import { VentanillaComponent } from './ventanilla/ventanilla.component';
import { VentanillaCreateComponent } from './ventanilla/ventanilla-create/ventanilla-create.component';
import { VentanillaIndexComponent } from './ventanilla/ventanilla-index/ventanilla-index.component';
import { VentanillaShowComponent } from './ventanilla/ventanilla-show/ventanilla-show.component';
import {VentanillaService} from './ventanilla/ventanilla.service';
import {AsignacionCategoriaService} from './asignacion-categoria/asignacion-categoria.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioIndexComponent } from './usuario/usuario-index/usuario-index.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import {UsuarioService} from './usuario/usuario.service';
import { AsignacionVentanillaComponent } from './asignacion-ventanilla/asignacion-ventanilla.component';
import { AsignacionVentanillaCreateComponent } from './asignacion-ventanilla/asignacion-ventanilla-create/asignacion-ventanilla-create.component';
import { AsignacionVentanillaIndexComponent } from './asignacion-ventanilla/asignacion-ventanilla-index/asignacion-ventanilla-index.component';
import { AsignacionVentanillaShowComponent } from './asignacion-ventanilla/asignacion-ventanilla-show/asignacion-ventanilla-show.component';
import {AsignacionVentanillaService} from './asignacion-ventanilla/asignacion-ventanilla.service';
import { TipoTramiteComponent } from './tipo-tramite/tipo-tramite.component';
import { TipoTramiteIndexComponent } from './tipo-tramite/tipo-tramite-index/tipo-tramite-index.component';
import { TipoTramiteShowComponent } from './tipo-tramite/tipo-tramite-show/tipo-tramite-show.component';
import {TipoTramiteService} from './tipo-tramite/tipo-tramite.service';
import {TipoTramiteCreateComponent} from './tipo-tramite/tipo-tramite-create/tipo-tramite-create.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import { CategoriaTramiteComponent } from './categoria-tramite/categoria-tramite.component';
import { CategoriaTramiteCreateComponent } from './categoria-tramite/categoria-tramite-create/categoria-tramite-create.component';
import { CategoriaTramiteIndexComponent } from './categoria-tramite/categoria-tramite-index/categoria-tramite-index.component';
import { CategoriaTramiteShowComponent } from './categoria-tramite/categoria-tramite-show/categoria-tramite-show.component';
import {CategoriaTramiteService} from './categoria-tramite/categoria-tramite.service';
import { TramiteComponent } from './tramite/tramite.component';
import { NormativaComponent } from './normativa/normativa/normativa.component';
import { NormativaCreateComponent } from './normativa/normativa-create/normativa-create.component';
import { NormativaIndexComponent } from './normativa/normativa-index/normativa-index.component';
import { NormativaShowComponent } from './normativa/normativa-show/normativa-show.component';
import {NormativaService} from './normativa/normativa.service';
import { ArticuloComponent } from './articulo/articulo/articulo.component';
import { ArticuloCreateComponent } from './articulo/articulo-create/articulo-create.component';
import { ArticuloIndexComponent } from './articulo/articulo-index/articulo-index.component';
import { ArticuloShowComponent } from './articulo/articulo-show/articulo-show.component';
import {ArticuloService} from './articulo/articulo.service';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoUploadIndexComponent } from './video-upload/video-upload-index/video-upload-index.component';
import { VideoUploadShowComponent } from './video-upload/video-upload-show/video-upload-show.component';
import { VideoUploadCreateComponent } from './video-upload/video-upload-create/video-upload-create.component';
import {VideoUploadService} from './video-upload/video-upload.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'visor', component: VisorComponent, canActivate: [AuthGuard]},
    {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
    {path: 'fichas', component: FichaCreateComponent, canActivate: [AuthGuard]},
    {path: 'noticias', component: NoticiasComponent, canActivate:[AuthGuard], children: [
        {path: 'nuevo', component: NoticiasCreateComponent},
        {path: 'lista', component: NoticiasIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'videos-upload', component: VideoUploadComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: VideoUploadCreateComponent},
        {path: 'lista', component: VideoUploadIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: UsuarioCreateComponent},
        {path: 'lista', component: UsuarioIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'categorias', component: CategoriaComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: CategoriaCreateComponent},
        {path: 'lista', component: CategoriaIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'asignacion-categorias', component: AsignacionCategoriaComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: AsignacionCategoriaCreateComponent},
        {path: 'lista', component: AsignacionCategoriaIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'ventanillas', component: VentanillaComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: VentanillaCreateComponent},
        {path: 'lista', component: VentanillaIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'asignacion-ventanillas', component: AsignacionVentanillaComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: AsignacionVentanillaCreateComponent},
        {path: 'lista', component: AsignacionVentanillaIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'tipo-tramites', component: TipoTramiteComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: TipoTramiteCreateComponent},
        {path: 'lista', component: TipoTramiteIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'categoria-tramites', component: CategoriaTramiteComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: CategoriaTramiteCreateComponent},
        {path: 'lista', component: CategoriaTramiteIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'normativas', component: NormativaComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: NormativaCreateComponent},
        {path: 'lista', component: NormativaIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'articulos', component: ArticuloComponent, canActivate: [AuthGuard], children: [
        {path: 'nuevo', component: ArticuloCreateComponent},
        {path: 'lista', component: ArticuloIndexComponent},
        {
            path: '',
            redirectTo: 'nuevo',
            pathMatch: 'full'
        },
    ]},
    {path: 'tramites', component: TramiteComponent},
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    PaginaNoEncontradaComponent,
    VideoComponent,
    FichaIndexComponent,
    FichaShowComponent,
    FichaComponent,
    NoticiasIndexComponent,
    NoticiasShowComponent,
    NoticiasComponent,
    NoticiasCreateComponent,
    FichaCreateComponent,
    FichaItemComponent,
    CategoriaComponent,
    CategoriaCreateComponent,
    CategoriaIndexComponent,
    CategoriaShowComponent,
    AsignacionCategoriaComponent,
    AsignacionCategoriaCreateComponent,
    AsignacionCategoriaIndexComponent,
    AsignacionCategoriaShowComponent,
    VentanillaComponent,
    VentanillaCreateComponent,
    VentanillaIndexComponent,
    VentanillaShowComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioIndexComponent,
    UsuarioShowComponent,
    AsignacionVentanillaComponent,
    AsignacionVentanillaCreateComponent,
    AsignacionVentanillaIndexComponent,
    AsignacionVentanillaShowComponent,
    TipoTramiteComponent,
    TipoTramiteCreateComponent,
    TipoTramiteIndexComponent,
    TipoTramiteShowComponent,
    LoginComponent,
    PerfilComponent,
    CategoriaTramiteComponent,
    CategoriaTramiteCreateComponent,
    CategoriaTramiteIndexComponent,
    CategoriaTramiteShowComponent,
    TramiteComponent,
    NormativaComponent,
    NormativaCreateComponent,
    NormativaIndexComponent,
    NormativaShowComponent,
    ArticuloComponent,
    ArticuloCreateComponent,
    ArticuloIndexComponent,
    ArticuloShowComponent,
    VideoUploadComponent,
    VideoUploadIndexComponent,
    VideoUploadShowComponent,
    VideoUploadCreateComponent,
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule,
      MdMenuModule,
      MdCardModule,
      MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdListModule,
      MdIconModule,
      MdSlideToggleModule,
      MdRadioModule,
      MdChipsModule,
      MdSelectModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
      AuthGuard,
      CategoriaService,
      NoticiasService,
      FichaService,
      VentanillaService,
      AsignacionCategoriaService,
      UsuarioService,
      AsignacionVentanillaService,
      TipoTramiteService,
      CategoriaTramiteService,
      NormativaService,
      ArticuloService,
      VideoUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }