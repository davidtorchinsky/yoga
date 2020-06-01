import { RouterModule, Routes} from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';





const APP_ROUTES: Routes=[
    {path:'login', component: LoginComponent },
    {path:'contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);