import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcModalModule } from '@bancolombia/design-system-web/bc-modal';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BcIconModule.forRoot({
      path: 'https://library-sdb.apps.bancolombia.com/bds/6.21.0',
    }),
    BcModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
