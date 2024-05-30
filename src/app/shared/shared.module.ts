import { NgModule } from '@angular/core';
import { FormatLocationPipe } from './pipes/format-location.pipe';
import { CustomBorderDirective } from './directives/custom-border.directive';


@NgModule({
  imports: [],
  exports: [FormatLocationPipe, CustomBorderDirective],
  declarations: [
    FormatLocationPipe,
    CustomBorderDirective
  ],
  providers: [],
})
export class SharedModule { }
