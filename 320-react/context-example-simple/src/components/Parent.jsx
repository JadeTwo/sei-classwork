import Child from './Child'

function Parent(props) {

    return ( 
        <div>
            <span>Parent</span><br/>|
            <Child style={props.style} />
        </div>
     );
}

export default Parent;