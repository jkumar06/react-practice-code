import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0)

    return(
        <div className="user-card m-4 bg-gray-50 rounded-lg">
            <h3>Count is: {count}</h3>
            <h2>Name:{name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact:000000</h4>
            
        </div>
    )
}
export default User;