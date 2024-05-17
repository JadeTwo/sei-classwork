import GrandChild from './GrandChild'

function Child(props) {
    return ( 
        <div>
            <span>Child</span><br />|
            <GrandChild style={props.style} />
        </div>
     );
}

export default Child;