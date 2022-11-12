import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { DiscogComponent } from './discog/discog.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'biografia',
    component: BioComponent,
  },
  {
    path: 'contatti',
    component: ContactComponent,
  },
  {
    path: 'discografia',
    component: DiscogComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
