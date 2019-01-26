import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
