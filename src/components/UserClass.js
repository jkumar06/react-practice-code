import React,{Component} from 'react';

class UserClass extends Component {
    constructor(props) {
        super(props);
       this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url:"https://i.pinimg.com/originals/79/33/f7/7933f7ffa41b847e0d9a96ee8f41f54b.jpg"
        }
       }
        // console.log(this.props.name +"Child Constructor")
    }

    // async componentDidMount() {
    //     const data = await fetch("https://api.github.com/users/akshaymarch7");
    //     const json = await data.json();

    //     this.setState({
    //         userInfo:json
    //     });
    // }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("component did mount calling!")
        }, 1000);
    }

    componentDidUpdate() {
        console.log("component didupdate")
    }

    componentWillUnmount() {
      clearInterval(this.timer);
      console.log("Componentwillunmount")
    }
    render() {
        const {name,location,avatar_url} = this.state.userInfo
        return(
            <div className="user-card">
            <img src={avatar_url} />
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:jaga@gmail.com</h4>   
        </div>
        )
    }
}
export default UserClass;