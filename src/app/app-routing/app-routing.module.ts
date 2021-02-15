import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { HobbiesComponent } from '../components/hobbies/hobbies.component';
import { ProjectsComponent } from '../components/projects/projects.component';

const routes: Routes = [
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: '', pathMatch: 'full', redirectTo: '/education'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
