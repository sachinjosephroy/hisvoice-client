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

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoHisvoiceEnglishComponent } from './video-hisvoice-english/video-hisvoice-english.component';
import { VideoGoinToBethlehemComponent } from './video-goin-to-bethlehem/video-goin-to-bethlehem.component';
import { VideoPaithalaamYeshuveComponent } from './video-paithalaam-yeshuve/video-paithalaam-yeshuve.component';
import { VideoHisvoiceMalayalamComponent } from './video-hisvoice-malayalam/video-hisvoice-malayalam.component';

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
    VideoHisvoiceMalayalamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ImageService,
    ImageFilterPipe,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
