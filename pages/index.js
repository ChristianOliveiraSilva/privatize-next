import React from 'react'
import Companies from '../Interfaces/Home/Companies'
import Filters from '../Interfaces/Home/Filters'
import Presentation from '../Interfaces/Home/Presentation'
import Navbar from '../Interfaces/Navbar'
import Footer from '../Interfaces/Footer'
import { useRouter } from 'next/router'

function Home () {
    const router = useRouter()

    return (
        <div>
            <Navbar router={router}/>
            <div style={{paddingTop: '80px'}}>
                <Presentation router={router}/>
                <Filters/>
                <Companies router={router}/>
                <Footer />
            </div>
        </div>
    )
}

export default Home
