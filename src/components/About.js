import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Component Did Mount")
    }

    render() {
        console.log("Parent Render")
        return(
            <>
            <div>LoggedIn User</div>
            <UserContext.Consumer>
                {({loggedInUser}) => <h3 className="text-xl font-bold">{loggedInUser}</h3>}
            </UserContext.Consumer>
            <h3>About</h3>
            <UserClass name={"1st(Class Component)"} 
                        location={"Mumbai"} />
          
        </>
        )
    }
}
export default About;
