import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';

import { ImageService } from './sharedservice/image.service';
import { ImageFilterPipe } from './sharedservice/filter.pipe';
import { ContactService } from './sharedservice/contact.service';
import { RegisterService } from './sharedservice/register.service';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './sharedservice/token-interceptor.service';
import { VideoHisvoiceEnglishComponent } from './video-hisvoice-english/video-hisvoice-english.component';
import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem/video-goin-to-bethlehem.component';
import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve/video-paithalaam-yeshuve.component';
import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam/video-hisvoice-malayalam.component';
import { VideoOSacredHeadComponent } from './video-o-sacred-head/video-o-sacred-head.component';
import { VideoYeshuKristhuUyirthuComponent } from './video-yeshu-kristhu-uyirthu/video-yeshu-kristhu-uyirthu.component';
import { VideoMaruvinuMazhayaiComponent } from './video-maruvinu-mazhayai/video-maruvinu-mazhayai.component';
import { VideoRingChristmasBellsComponent } from './video-ring-christmas-bells/video-ring-christmas-bells.component';
import { RetrieveContactsComponent } from './retrieve-contacts/retrieve-contacts.component';
import { VideoBlessedAssuranceComponent } from './video-blessed-assurance/video-blessed-assurance.component';
import { VideoYeshuvilEnThozhaneKandenComponent } from './video-yeshuvil-en-thozhane-kanden/video-yeshuvil-en-thozhane-kanden.component';
import { MembersComponent } from './members/members.component';
import { AdminMembersComponent } from './admin-members/admin-members.component';
import { AdminMembersService } from './sharedservice/admin-members.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { AudioComponent } from './audio/audio.component';
import { EventsComponent } from './events/events.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { EventService } from './sharedservice/event.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MessageComponent,
    RegisterComponent,
    AboutComponent,
    LoginComponent,
    GalleryComponent,
    PhotoComponent,
    ImageFilterPipe,
    VideoHisvoiceEnglishComponent,
    VideoGoinToBethlehemComponent,
    VideoPaithalaamYeshuveComponent,
    VideoHisvoiceMalayalamComponent,
    VideoOSacredHeadComponent,
    VideoYeshuKristhuUyirthuComponent,
    VideoMaruvinuMazhayaiComponent,
    VideoRingChristmasBellsComponent,
    RetrieveContactsComponent,
    VideoBlessedAssuranceComponent,
    VideoYeshuvilEnThozhaneKandenComponent,
    MembersComponent,
    AdminMembersComponent,
    AudioComponent,
    EventsComponent,
    AdminEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxAudioPlayerModule
  ],
  providers: [
    ImageService,
    ImageFilterPipe,
    ContactService,
    RegisterService,
    AdminMembersService,
    EventService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
