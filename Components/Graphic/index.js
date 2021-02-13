import { ResponsiveBar } from '@nivo/bar'
import Proptypes from 'prop-types'

import React from 'react'

function Graphic ({ data, keys, index, type }) {
    if (type === 'bar') {
        return (
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={index}
                colors={'#6CAD83'}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Assinaturas',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        )
    } else if (type === 'pie') {
        return (
            null
        )
    }
}

Graphic.propTypes = {
    data: Proptypes.array,
    keys: Proptypes.array,
    index: Proptypes.string,
    colors: Proptypes.string
}

export default Graphic
