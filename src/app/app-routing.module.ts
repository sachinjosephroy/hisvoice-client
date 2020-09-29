import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { PhotoComponent } from './photo/photo.component';

import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve/video-paithalaam-yeshuve.component';
import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem/video-goin-to-bethlehem.component';
import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam/video-hisvoice-malayalam.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'message', component: MessageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'paithalaam', component: VideoPaithalaamYeshuveComponent },
  { path: 'goin-to-bethlehem', component: VideoGoinToBethlehemComponent },
  { path: 'hisvoice-malayalam', component: VideoHisvoiceMalayalamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
