import React from 'react'
import Companies from '../Components/Companies'
import Filters from '../Components/Filters'
import Presentation from '../Components/Presentation'
import Navbar from '../Components/Navbar'
import Footer from '../Interfaces/Footer'
import { useRouter } from 'next/router'

function Home () {
    const router = useRouter()

    return (
        <div>
            <Navbar router={router}/>
            <Presentation router={router}/>
            <Filters/>
            <Companies router={router}/>
            <Footer />
        </div>
    )
}

export default Home
