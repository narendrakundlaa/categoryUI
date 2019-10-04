import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { UploadDataComponent } from './shared-components/upload-data/upload-data.component';

/*primeNg*/
import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


import { CatagiriesComponent } from './shared-components/catagiries/catagiries.component';
import { DetailsComponent } from './shared-components/details/details.component';
import { AlertBoxComponent } from './shared-components/alert-box/alert-box.component';
import { AccordianComponent } from './shared-components/accordian/accordian.component';
import { FooterComponent } from './shared-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadDataComponent,
    CatagiriesComponent,
    DetailsComponent,
    AlertBoxComponent,
    AccordianComponent,
    FooterComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
