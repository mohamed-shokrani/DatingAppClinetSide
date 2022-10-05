import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:MainlayoutComponent,children:[
    {path:'memberlist',component:MemberListComponent},

    
    {path:'members',component:MemberListComponent},
    {path:'members/:id',component:MemberDetailsComponent},
    {path:'lists',component:ListsComponent},
    {path:'messages',component:MessagesComponent},


  { path:'home',component:HomeComponent}
  ]},
  {path:'register' ,component:RegisterComponent},


  {path:'**',component:HomeComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
