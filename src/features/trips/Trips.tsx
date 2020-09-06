import React from 'react'
import { TripsItem } from '../trips-item/TripsItem'
import { Trip } from '../../models/Trip'
import { Waypoint } from 'react-waypoint'
import StyledTrips from './Trips.style'
import { usePaginatedTrips } from './hooks'
import { FixedSizeList } from 'react-window'

export const Trips = () => {

    const { trips, loadMore } = usePaginatedTrips()



    const Row = ({ index, style }: any) => (
        <React.Fragment key={trips[index].link}>
            {index === trips.length - 10 && <Waypoint onEnter={loadMore}></Waypoint>}
            <TripsItem trip={trips[index]}></TripsItem>
        </React.Fragment>
    );

    return (
        <StyledTrips>
            <FixedSizeList
                height={300}
                itemCount={trips.length}
                itemSize={105}
                width={300}
            >
                {Row}
            </FixedSizeList>
        </StyledTrips>
    )
}

