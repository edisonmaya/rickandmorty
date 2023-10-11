import axios from "axios"

const ComplementHeader = ({ location, setLocation}) => {
  const URL = "https://rickandmortyapi.com/api/location"
  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios.get(URL + `/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))

  }
  return (
    <section className=" min-h-[60vh]">
      <div className='flex flex-col gap-8 items-center justify-end min-h-[80vh] md:min-h-[80vh]'>
        <div className='sm:w-[40vw]'>

          <form onSubmit={handleSubmit} className='flex  justify-center items-center w-[40vw] ' action="">
            <input name="idLocation" type="number" className="placeholder:font-normal px-1 h-10 w-[30vw]" placeholder='Type a location..' />
            <button className="flex justify-center text-white items-center bg-[#8EFF8B80] hover:bg-green-600 h-10 w-[10vw] ">
              Search <img className="text-white" src='/search.png'>
              </img></button>
          </form>

        </div>
        <div className=" grid grid-rows-1  place-items-center border-2 border-green-600 text-center lg:w-[1000px] mx-2 text-gray-400 font-normal gap-1 text-sm lg:text-lg ">
          <span className=' text-[#8EFF8B] font-medium p-4'>¡Welcome to {location?.name}!</span>
          <div className=" grid grid-cols-3 auto-cols-max items-start justify-center  max-w-[1000px] ">
            <span>Type: {location?.type}</span>
            <span>Dimension: {location?.dimension}</span>
            <span>Population: {location?.residents.length ?? []} </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ComplementHeader