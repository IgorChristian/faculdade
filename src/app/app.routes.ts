import { Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth.guard';
import { 
  RoleGuardService as RoleGuard 
} from './services/auth/role-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  { path: '**', redirectTo: '' }
];