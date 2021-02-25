import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InterestsComponent } from './interests/interests.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, children: [
    {path: "about", component: AboutComponent},
    {path: "interests", component: InterestsComponent},
    {path: "projects", component: ProjectsComponent},
    {path: "skills", component: SkillsComponent},
    {path: "certifications", component: CertificationsComponent},
    {path: "achievements", component: AchievementsComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
