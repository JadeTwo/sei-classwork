import { useParams } from "react-router-dom"

function Profile() {

    const { id } = useParams() // return ->   { id: 'bob }

    console.log(id)

    return (
        <div>Profile Page</div>
    )
}

export default Profile