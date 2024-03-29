import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { QuizPageComponent } from '@pages/quiz-page/quiz-page.component';
import { ResultsPageComponent } from '@pages/results-page/results-page.component';
import { ResultsGuard } from './routes/results-guard';
import { QuizGuard } from './routes/quiz-guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'quiz', component: QuizPageComponent, pathMatch: 'full', canActivate: [QuizGuard] },
	{ path: 'results', component: ResultsPageComponent, pathMatch: 'full', canActivate: [ResultsGuard] },
];
