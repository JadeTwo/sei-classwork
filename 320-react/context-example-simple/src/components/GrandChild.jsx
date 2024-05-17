import GreatGrandChild from "./GreatGrandChild";

function GrandChild(props) {

    return ( 
        <div>
            <span>GrandChild</span> <br/> |
            <GreatGrandChild style={props.style} />
        </div>
     );
}

export default GrandChild;