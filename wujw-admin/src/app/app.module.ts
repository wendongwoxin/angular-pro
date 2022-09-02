import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { PieSkillComponent } from './components/charts/pie-skill/pie-skill.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexDropdownComponent,
    FooterComponent,
    PieSkillComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
