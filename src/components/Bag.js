const bag={
    padding: "20px",
    background: "blue",
    margin: "20px 30px"
}

function Bag(props){
 return <h1 style={bag}>{props.children}</h1>
}


export default Bag;