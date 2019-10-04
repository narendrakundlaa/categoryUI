import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadDataComponent } from './shared-components/upload-data/upload-data.component';
import { CatagiriesComponent } from './shared-components/catagiries/catagiries.component';
import { DetailsComponent } from './shared-components/details/details.component';


const routes: Routes = [
  { path: '', component: UploadDataComponent },
  { path: 'upload', component: UploadDataComponent },
  { path: 'catagories', component: CatagiriesComponent },
  { path: 'catagories/:id', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
