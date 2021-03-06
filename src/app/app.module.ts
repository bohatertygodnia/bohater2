import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KidsComponent } from './kids.component';
import { ParentsComponent } from './parents.component';
import { KidComponent } from './kid.component';
import { CreateKidComponent } from './create-kid.component';
import { ParentComponent } from './parent.component';
import { CreateMissionComponent } from './create-mission.component';
import { MissionComponent } from './mission.component';
import { NewMissionComponent } from './new-mission.component';
import { ExpertMissionsComponent } from './expert-missions.component';
import { ExpertMissionComponent } from './expert-mission.component';
import { ProgressComponent } from './progress.component';
import { OneDayComponent } from './one-day.component';
import { OneWeekComponent } from './one-week.component';
import { OneDayViewComponent } from './one-day-view.component';
import { MissionViewComponent } from './mission-view.component';
import { NewGiftComponent } from './new-gift.component';
import { CreateGiftComponent } from './create-gift.component';
import { ExpertGiftComponent } from './expert-gift.component';
import { GiftComponent } from './gift.component';
import { ExpertGiftsComponent } from './expert-gifts.component';
import { MissionsToAcceptComponent } from './missions-to-accept.component';
import { ProgressWeekComponent } from './progress-week.component';
import { ShortcutKidComponent } from './shortcut-kid.component';


@NgModule({
  declarations: [
    AppComponent,
    KidsComponent,
    ParentsComponent,
    KidComponent,
    CreateKidComponent,
    ParentComponent,
    CreateMissionComponent,
    MissionComponent,
    NewMissionComponent,
    ExpertMissionsComponent,
    ExpertMissionComponent,
    ProgressComponent,
    OneDayComponent,
    OneWeekComponent,
    OneDayViewComponent,
    MissionViewComponent,
    NewGiftComponent,
    CreateGiftComponent,
    ExpertGiftComponent,
    GiftComponent,
    ExpertGiftsComponent,
    MissionsToAcceptComponent,
    ProgressWeekComponent,
    ShortcutKidComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
