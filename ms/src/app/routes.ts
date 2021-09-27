import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

{path: 'header', component: HeaderComponent},
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}

];