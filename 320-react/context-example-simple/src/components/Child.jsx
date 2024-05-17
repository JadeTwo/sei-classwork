import GrandChild from './GrandChild'

function Child(props) {
    return ( 
        <div>
            <span>Child</span><br />|
            <GrandChild  />
        </div>
     );
}

export default Child;