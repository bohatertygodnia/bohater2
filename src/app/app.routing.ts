import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from "./app.component";
import { KidsComponent } from "./kids.component";
import { ParentsComponent } from "./parents.component";
import { KidComponent } from "./kid.component";
import { CreateKidComponent } from "./create-kid.component";
import { ParentComponent } from "./parent.component";
import { CreateMissionComponent } from "./create-mission.component";
import { MissionComponent } from "./mission.component";
import { NewMissionComponent } from "./new-mission.component";
import { ExpertMissionComponent } from "./expert-mission.component";


const routes:Routes = [
    { path: '',                                         component: KidsComponent},
    { path: 'kids',                                     component: KidsComponent}, 
    { path: 'kids/:kidId',                              component: KidComponent},
    { path: 'kids/:kidId/new-mission',                  component: NewMissionComponent},
    { path: 'kids/:kidId/create-mission',               component: CreateMissionComponent},
    { path: 'kids/:kidId/expert-mission/:missionId',    component: ExpertMissionComponent},
    { path: 'kids/:kidId/:missionId',                   component: MissionComponent},
    { path: 'parents',                                  component: ParentsComponent},
    { path: 'parents/:parentId',                        component: ParentComponent},
    { path: 'parents/:parentId/create-kid',             component: CreateKidComponent},    
]

export const Routing = RouterModule.forRoot(routes,{
    useHash:false
})