import GreatGrandChild from "./GreatGrandChild";

function GrandChild(props) {

    return ( 
        <div>
            <span>GrandChild</span> <br/> |
            <GreatGrandChild  />
        </div>
     );
}

export default GrandChild;