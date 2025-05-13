import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./components/Card"

function App() {
  const [actress, setActress] = useState([])
  const [actors, setActors] = useState([])

  const fetchActress = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then(res => {
      setActress(res.data)
    })
  }

  const fetchActors = () => {
    axios.get('https://lanciweb.github.io/demo/api/actors/').then(res => {
      setActors(res.data)
    })
  }


  useEffect(() => {
    fetchActress()
    fetchActors()
  }, [])


  return (
    <>
      <div className="container p-5">
        <h1 className="fw-bold mb-5">Hall of fame</h1>

        <input type="text" className="form-control form-control-lg border-0 shadow-sm mb-5" placeholder="Search..." />

        <h3 className="mb-3">Actresses</h3>
        <div className="row  row-cols-3 mb-5">

          {actress.map((act) => {
            return <Card act={act} key={act.id} />
          })}

        </div>

        <h3 className="mb-3">Actors</h3>
        <div className="row  row-cols-3">

          {actors.map((act) => {
            return <Card act={act} key={act.id} />
          })}

        </div>
      </div>
    </>
  )
}

export default App
