import React from 'react'
import Companies from '../Components/Companies'
import Filters from '../Components/Filters'
import Presentation from '../Components/Presentation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
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
