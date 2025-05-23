import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./components/Card"

function App() {
  const [actress, setActress] = useState([])
  const [actors, setActors] = useState([])
  const [allActors, setAllActors] = useState([])
  const [value, setValue] = useState('')
  const [filteredActors, setFilteredActors] = useState(allActors)

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

  useEffect(() => {
    setAllActors([...actress, ...actors])
    
    const filtered = allActors.filter((act) => {
      return act.name.toLowerCase().includes(value.toLowerCase()) 
    })
    
    
    setFilteredActors(filtered)

  }, [actress, actors, value])



  return (
    <>
      <div className="container p-5">
        <h1 className="fw-bold mb-5">Hall of fame</h1>

        <input type="text" className="form-control form-control-lg border-0 shadow-sm mb-5" placeholder="Search..." value={value} onChange={e => setValue(e.target.value)} />
        <div className="row  row-cols-3 mb-5">

          {filteredActors.map((act, i) => {
            return <Card act={act} key={i} />
          })}

        </div>
      </div>
    </>
  )
}

export default App
