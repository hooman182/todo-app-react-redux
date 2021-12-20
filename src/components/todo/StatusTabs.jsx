import { Component } from "react";

class StatusTabs extends Component {
    render() {
        return (
            <div class="tabs">
                <ul>
                    <li class="is-active"><a>All</a></li>
                    <li><a>Active</a></li>
                    <li><a>Completed</a></li>
                </ul>
            </div>
        )
    }
}

export default StatusTabs;