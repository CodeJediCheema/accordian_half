import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {  
            userInfo :{
                name: "dummy",
                location: "default"

            },
        };

        console.log(" Constructor called");
    }

   async componentDidMount(){
       
       const data = await fetch("https://api.github.com/users/CodeJediCheema");
       const json = await data.json();
       console.log(json)
       
       this.setState({userInfo: json});
    //    this.timer = setInterval(()=>{
    //     console.log("Set Interval");

    //    },1000);
    //    console.log("Component did mount fetched data");
       
    }

    componentDidUpdate(){
        // console.log("Component did update called")
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("Component did unmounted called")
    }
    render(){
        const {name, location,login,avatar_url,bio} = this.state.userInfo;
        console.log(" Render Called");
        return(
            <div className="user-class">
            
            <img src={avatar_url}/>
            <h2> Name: {name}</h2>
            <p>Bio: {bio}</p>
            <p>Username: {login}</p>
            <p> Location: {location}</p>
            

        </div>

        )
    }

}

export default UserClass;
