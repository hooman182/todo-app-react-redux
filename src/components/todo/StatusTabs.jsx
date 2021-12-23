import { Component } from "react";

class StatusTabs extends Component {
    render() {
        return (
            <nav class="nav nav-pills nav-fill">
                <span class="nav-link active">All</span>
                <span class="nav-link">Active</span>
                <span class="nav-link">Completed</span>
            </nav>
        )
    }
}

export default StatusTabs;