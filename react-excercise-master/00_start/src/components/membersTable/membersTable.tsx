import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { } from 'core-js';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>
  //estado de entrada será organización
  organization: string;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    //en el estado le pasamos el estado creado anteriormente con un valor
    this.state = { members: [], organization: 'lemoncode'};
  }

  loadMembers = () => {
    //API le pasamos el estado de la organización
    memberAPI.getAllMembers(this.state.organization).then((members) =>
      this.setState({ members: members })
    );
  }

  public render() {

    return (
      <div className="row">
        <h2> Members Page</h2>
        
        <input value={this.state.organization}
        onChange={(e) => this.setState({organization:e.target.value})}
        />
        <button onClick={this.loadMembers}>Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
