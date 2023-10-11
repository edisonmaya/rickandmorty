import './App.css'
import DrawHeader from './components/DrawHeader'
import CardsComponent from './components/CardsComponent'
import ComplementHeader from './components/ComplementHeader'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getRandomNumber } from './utils/random'

function App() {
const [location, setLocation] = useState(null)
const URL = `https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
  useEffect(() => {
    axios.get(URL)
        .then(({ data }) => setLocation(data))
        .catch((err) => console.log(err))
}, [])
//
  return (
    <>
      <main className="bg-[url('/backgroundHeader.png')] min-h-[100vh] sm:min-h-[100vh] font-['Fira_Code']">
        <header >
          <DrawHeader></DrawHeader>
          <ComplementHeader location={location} setLocation={setLocation}></ComplementHeader>
        </header>
        <section className='grid max-w-[1000px] mx-auto justify-center items-center ' >
        <CardsComponent residents={location?.residents ?? []} ></CardsComponent>
        </section>
      </main>
    </>
  )
}

export default App
