import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Profile() {

    const [user, setUser] = useState(null)

    const { id } = useParams() 

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

    useEffect(() => {
        if (!id) return 
        setTimeout(getUserData, 1000)
    }, [])

    // loaded function for when data is fetched.
    const loaded = () => {
        if (typeof user === 'string') {
            return <div>{user}</div>   
        } else {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.age}</h2>
                </div>
            );
        }
    };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If data exists, run the loaded function; otherwise, run loading.
  return user ? loaded() : loading();
}

export default Profile