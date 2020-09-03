import React, {Component} from 'react';
import { connect } from 'react-redux';

import Notification from '../Notification/Notification';
import ProjectLists from '../../projects/ProjectLists';

class Dashboard extends Component {
    render() {
        const { projects } = this.props

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);