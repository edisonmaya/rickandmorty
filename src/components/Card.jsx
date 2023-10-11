import axios from "axios"
import { useEffect, useState } from "react"
import { characterStatus } from "../constants/resident"

const Card = ({ residentEndPoint }) => {
    const [resident, setResident] = useState(null)
    useEffect(() => {
        axios.get(residentEndPoint)
            .then(({ data }) => setResident(data))
            .then((err) => console.log(err))
    }, [])
    console.log(resident);
    const DeadOrAlive = {

    }
    return (
        <>

            <article className=" border-2 my-4 mx-2 sm:mx-0 border-green-400">
                <header className="relative ">
                    <img className="block w-full h-full object-cover " src={resident?.image} alt="" />
                    <div className="absolute left-1/2 bottom-4 text-white -translate-x-1/2 bg-black/50 flex items-center justify-center gap-2 px-4 py-1 rounded-md">
                        <div className={`h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}></div>
                        <span>{resident?.status}</span>
                    </div>
                </header>
                <span className='flex justify-center text-white font-medium'>{resident?.name}</span>

                <section className="flex flex-row w-full p-2 border-t-2 border-green-400">
                    <div className="flex flex-col  justify-center items-start text-gray-700">
                        <span>Species:</span>
                        <span>Origin:</span>
                        <span>Times appear:</span>
                    </div>
                    <div className="flex flex-col justify-center items-start  text-white">
                        <span>{resident?.species}</span>
                        <span>{resident?.origin.name}</span>
                        <span>{resident?.episode.length}</span>
                    </div>
                </section>

            </article>
        </>
    )
}
export default Card