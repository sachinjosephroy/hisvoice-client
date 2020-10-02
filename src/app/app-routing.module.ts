import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RetrieveContactsComponent } from './retrieve-contacts/retrieve-contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { PhotoComponent } from './photo/photo.component';

import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam/video-hisvoice-malayalam.component';
import { VideoHisvoiceEnglishComponent } from './video-hisvoice-english/video-hisvoice-english.component';

import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem/video-goin-to-bethlehem.component';
import { VideoOSacredHeadComponent } from './video-o-sacred-head/video-o-sacred-head.component';
import { VideoRingChristmasBellsComponent } from './video-ring-christmas-bells/video-ring-christmas-bells.component';
import { VideoBlessedAssuranceComponent } from './video-blessed-assurance/video-blessed-assurance.component';
import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve/video-paithalaam-yeshuve.component';
import { VideoYeshuKristhuUyirthuComponent } from './video-yeshu-kristhu-uyirthu/video-yeshu-kristhu-uyirthu.component';
import { VideoMaruvinuMazhayaiComponent } from './video-maruvinu-mazhayai/video-maruvinu-mazhayai.component';
import { VideoYeshuvilEnThozhaneKandenComponent } from './video-yeshuvil-en-thozhane-kanden/video-yeshuvil-en-thozhane-kanden.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contacts', component: RetrieveContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'message', component: MessageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'hisvoice-malayalam', component: VideoHisvoiceMalayalamComponent },
  { path: 'hisvoice-english', component: VideoHisvoiceEnglishComponent },
  { path: 'paithalaam-yeshuve', component: VideoPaithalaamYeshuveComponent },
  { path: 'goin-to-bethlehem', component: VideoGoinToBethlehemComponent },
  { path: 'o-sacred-head', component: VideoOSacredHeadComponent },
  { path: 'yeshu-kristhu-uyirthu', component: VideoYeshuKristhuUyirthuComponent },
  { path: 'maruvinu-mazhayai', component: VideoMaruvinuMazhayaiComponent },
  { path: 'ring-christmas-bells', component: VideoRingChristmasBellsComponent },
  { path: 'blessed-assurance', component: VideoBlessedAssuranceComponent },
  { path: 'yeshuvil-en-thozhane', component: VideoYeshuvilEnThozhaneKandenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
