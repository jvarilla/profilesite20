import React from 'react'
import './NavBar.css';
class NavBar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            navBarClassNames: "topnav",
        }
    }

    componentWillUpdate(nextProps) {

    }

    expandNavBar = () => {
        console.log("Nav Bar")
        if (this.state.navBarClassNames === "topnav") {
            this.setState({navBarClassNames: "topnav responsive" });
        } else {
            this.setState({navBarClassNames: "topnav" });
        }
    }
    render() {
        return(
            <div className={this.state.navBarClassNames}>
                <a className="active">
                    <i className="fa fa-home"></i>
                </a>
                <a>About Me</a>
                <a>Experience</a>
                <a>Projects</a>
                <a>Skills</a>
                <a>Education</a>        
                <a className="icon" href="javascript:void(0);" onClick={this.expandNavBar}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
        );
        
    }
}

export default NavBar;