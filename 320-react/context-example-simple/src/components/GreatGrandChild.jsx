// Step 3: Use the context value inside the nested component that needs it
import { FamilyContext } from "../App";
import { useContext } from "react";

function GreatGrandChild() {

    const style = useContext(FamilyContext)

    return ( 
        <div>
            <span style={style}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;