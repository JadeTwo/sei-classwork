import { useEffect } from "react"

function ControlledForm() {

    useEffect(() => {
      console.log('Form Mounted')

      // cleanup function (on re-render or dismounts)
      return () => {
        console.log('Form Dismounted')
      }
    }, [])

    return (
      <form>
        <label>
            Name:
            <br />
            <input type="text" />
        </label>
        <br />
        <label>
            Age:
            <br />
            <input type="text" />
        </label>
        <br /><br />
        <button>Submit</button>
      </form>
    )
  }
  
  export default ControlledForm