import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {EMICalculatorComponent} from "./components/emicalculator/emicalculator.component";

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'home'},
  {path: 'fibo', component: ProfileComponent},
  {path: 'emi', component: EMICalculatorComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
