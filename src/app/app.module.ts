import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { StudentComponent } from './feature/student/student.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleContentComponent } from './article-content/article-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    StudentComponent,
    ArticlesComponent,
    ArticleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
