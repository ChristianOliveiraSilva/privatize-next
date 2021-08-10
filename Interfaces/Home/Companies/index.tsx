import React, { Component, ReactElement } from 'react'
import { Content, Grid } from './style'
import Card from '../../../Components/Card'
import { NextRouter } from 'next/router'

interface CompaniesProps {
    router: NextRouter
}

interface CompanieObject {
    id: number,
    animationDelay: number
}

const Companies: React.FC<CompaniesProps> = (props) => {

    const Companies = () : ReactElement | null => {
        let  companies : Array<CompanieObject> = []
        let animationDelay = 0

        for (let i = 0; i <= 10; i++) {
            animationDelay = animationDelay + 0.05
            companies = companies.concat([{
                id: i,
                animationDelay: animationDelay
            }])
        }

        if (!companies) {
            return null
        }

        return (
            <React.Fragment>
                {companies.map((e) => (
                    <Card animated id={e.id} animationDelay={e.animationDelay} key={e.id} router={props.router} />
                ))}
            </React.Fragment>
        )
    }

    return (
        <Content>
            <Grid id="companiesGrid" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
                <Companies />
            </Grid>
        </Content>
    )
}

export default Companies
