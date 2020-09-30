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

import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam/video-hisvoice-malayalam.component';
import { VideoHisvoiceEnglishComponent } from './video-hisvoice-english/video-hisvoice-english.component';

import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve/video-paithalaam-yeshuve.component';
import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem/video-goin-to-bethlehem.component';
import { VideoOSacredHeadComponent } from './video-o-sacred-head/video-o-sacred-head.component';
import { VideoYeshuKristhuUyirthuComponent } from './video-yeshu-kristhu-uyirthu/video-yeshu-kristhu-uyirthu.component';

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
  { path: 'hisvoice-malayalam', component: VideoHisvoiceMalayalamComponent },
  { path: 'hisvoice-english', component: VideoHisvoiceEnglishComponent },
  { path: 'paithalaam', component: VideoPaithalaamYeshuveComponent },
  { path: 'goin-to-bethlehem', component: VideoGoinToBethlehemComponent },
  { path: 'o-sacred-head', component: VideoOSacredHeadComponent },
  { path: 'yeshu-kristhu-uyirthu', component: VideoYeshuKristhuUyirthuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
