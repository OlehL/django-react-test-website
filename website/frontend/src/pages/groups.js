import React, {Fragment} from 'react';
import axios from 'axios';
import { GroupList } from '../components/GroupList';


export class Groups extends React.Component {

    state = {
        groups: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/groups/')
            .then(res => {
                const groups= res.data;
                this.setState({ groups});
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>Groups</h1>
                    <GroupList groups={this.state.groups}/>
                </div>
            </Fragment>
        )
    }
}
