function Welcome(props) {

    /*

    props looks like (an object):

    {
        firstName: ...
        lastName: ...
        style: {
            color: ...
        }
    }

    */

    return (
        <h1 style={props.style}>
            Welcome {props.firstName} {props.lastName}!
        </h1>
    )
}

export default Welcome;