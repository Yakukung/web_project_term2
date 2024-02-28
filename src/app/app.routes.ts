import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SigninOrSignupComponent } from './components/signin-or-signup/signin-or-signup.component'
import { HomepageComponent } from './components/homepage/homepage.component'
import { VoteComponent } from './components/vote/vote.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ProfileComponent } from './components/profile/profile.component'
export const routes: Routes = [
    { path: '', component: SigninOrSignupComponent},
    { path: 'homepage', component: HomepageComponent },
    { path: 'vote', component: VoteComponent},
    { path: 'ranking', component: RankingComponent},
    { path: 'profile', component: ProfileComponent }
];
