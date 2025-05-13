import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const renderCards = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then(res => {
      console.log(res.data)
    })
  }


  useEffect(() => {
    renderCards()
  }, [])


  return (
    <>
      <div className="container p-5">
        <h1 className="fw-bold mb-5">Hall of fame</h1>

        {/* input search */}
        <input type="text" className="form-control border-0 shadow-sm mb-5" placeholder="Search..."/>

        <div className="row row-cols-1">
          <div className="col p-3">

            <div className="card flex-row mb-3 border-0 shadow p-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg" alt="" className="card-img rounded" />

              <div className="card-body">
                <h5 className="card-title">Nome Cognome</h5>
                <span className="card-info text-secondary">1998 - Italian</span>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique quo neque quae! Tempore voluptatibus eos porro esse, itaque labore nisi dolorem consequuntur, quidem illo ab laudantium quos fugiat?</p>
                <span className="card-awards fst-italic text secondary">Niente</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
