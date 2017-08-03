import { RouterModule, Routes } from '@angular/router';
import { VideoViewComponent } from './video-view/video-view.component';
import { MaterialContentGridComponent } from './material-content-grid/material-content-grid.component';

const MAINMENU_ROUTES: Routes = [
    { path: '', component: MaterialContentGridComponent, data: {channel: 'NoCopyrightSounds'}},
    { path: 'v/:id', component: VideoViewComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);