import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HostFormComponent } from './host-form/host-form.component';

// Third
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; //?
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //?

const appRoutes: Routes = [
  { path: '', component: HostFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HostFormComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
