import { Component } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';



@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  organization: "";

  constructor(private membersApi: MembersApiService) { }

  loadMembers() {
    this.membersApi.getAllMembers(this.organization)
      .subscribe((ms) => this.members = ms);
  }

}
