// Step 3: Use the context value inside the nested component that needs it
//         by combining the context itself with the useContext hook

import { FamilyContext } from "../App"; // context itself
import { useContext } from "react"; // useContext hook

function GreatGrandChild() {

    const style = useContext(FamilyContext) // combined

    return ( 
        <div>
            <span style={style}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;