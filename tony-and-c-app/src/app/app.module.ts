import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SocialComponent } from './header/social/social.component';
import { SearchComponent } from './header/search/search.component';
import { LogoComponent } from './header/logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EmailNewsletterComponent } from './footer/email-newsletter/email-newsletter.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { ImgCarouselComponent } from './home/img-carousel/img-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    SearchComponent,
    LogoComponent,
    HomeComponent,
    ImgCarouselComponent,
    FooterComponent,
    EmailNewsletterComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
