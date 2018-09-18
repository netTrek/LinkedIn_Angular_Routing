import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAComponent } from './modal-a/modal-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalAComponent],
  exports: [ModalAComponent]
})
export class ModalModule { }
