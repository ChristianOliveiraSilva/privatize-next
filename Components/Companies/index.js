import React from 'react'
import { Content, Grid } from './style'
import Card from '../Card'
import PropTypes from 'prop-types'

function Companies (props) {

    const Companies = () => {
        let companies = []
        let animationDelay = 0

        for (let i = 0; i <= 10; i++) {
            animationDelay = animationDelay + 0.15
            companies = companies.concat([{
                id: i,
                animationDelay: animationDelay
            }])
        }

        if (!companies) {
            return
        }

        return (
            <>
                {companies.map((e) => (
                    <Card animated id={e.id} animationDelay={e.animationDelay} key={e.id} router={props.router} />
                ))}
            </>
        )
    }

    return (
        <Content>
            <Grid flexDirection="row" justifyContent="space-around" flexWrap="wrap">
                <Companies />
            </Grid>
        </Content>
    )
}

Companies.propTypes = {
    router: PropTypes.object
}

export default Companies
