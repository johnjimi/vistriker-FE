import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { CONST_ROUTING, RouterModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule, MdAutocompleteModule, MdInputModule,
    MdSnackBarModule
  } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialContentGridComponent } from './material-content-grid/material-content-grid.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { SafePipe } from './safe.pipe';
import { InputSearchChannelComponent } from './input-search-channel/input-search-channel.component';
import { DataService } from './data.service';
import { SidenavPushRightComponent } from './sidenav-push-right/sidenav-push-right.component';
import { VideoOptionsButtonComponent } from './video-options-button/video-options-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MaterialSidenavComponent,
    MaterialToolbarComponent,
    MaterialContentGridComponent,
    VideoViewComponent,
    SafePipe,
    InputSearchChannelComponent,
    SidenavPushRightComponent,
    VideoOptionsButtonComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule, MdAutocompleteModule, MdInputModule,
    MdSnackBarModule,
    CONST_ROUTING,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
