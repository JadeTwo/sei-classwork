import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Profile() {

    const [user, setUser] = useState(null)

    const { id } = useParams() 

    console.log(id)

    useEffect(() => {
        async function getUserData() {
            try {
                let response = await fetch('http://example-api.com/' + id)
                let userData = await response.json()
                setUser(userData)
            } catch(err) {
                console.log('whoops...')
                console.log(err)
                setUser('No user available...')
            }
        }
        getUserData()
    }, [])

    return (
        <div>
            Profile Page
            <br />
            {user}
        </div>
    )
}

export default Profile