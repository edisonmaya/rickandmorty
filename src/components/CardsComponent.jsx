
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import { paginationlogic } from "../utils/pagination"

const CardsComponent = ({residents}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const {pages, residentInPage}=paginationlogic(currentPage,residents)

    const [cards, setCards] = useState(null)
    const URL = "https://rickandmortyapi.com/api/character"
    useEffect(() => {
        axios.get(URL)
            .then(({ data }) => setCards(data.results))
            .catch((err) => console.log(err))
    }, [])
    useEffect(()=>{
        setCurrentPage(1)
    },[residents])
    return (
        <section>
        <section className=" grid sm:grid-cols-3 sm:justify-center sm:mx-2 lg:mx-0  mt-8 gap-4">
            {residentInPage.map((resident) =>
                <Card key={resident} residentEndPoint={resident} >  </Card>
            )}
        </section>
        
        <ul className="text-white text-lg flex gap-5 justify-center flex-wrap">
            {
                pages.map((page)=>(
                    <li key={page}>
                        <button className={`bg-black/50 p-4 ${page===currentPage&&"bg-green-500"}`} onClick={()=>setCurrentPage(page)}>{page}</button>
                    </li>
                )
                )
            }
        </ul>

        
        </section>
    )
}
export default CardsComponent