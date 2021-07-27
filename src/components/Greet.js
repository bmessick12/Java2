import React from 'react'

// function Greet()  {

//     return <h1>Hello Brian!</h1>
// }

const Greet = (props) => {
    console.log(props)
    const {name, heroName} = props
    return (
        <div>
        <h1>Hello {name} 
    <br>
    </br>a.k.a. {heroName}</h1>
    {props.children}
    </div>
    )
}

export default Greet