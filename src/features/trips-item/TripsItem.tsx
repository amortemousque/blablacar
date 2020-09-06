import React from 'react'
import StyledTripsItem from './TripsItem.style'
import { Trip } from '../../models/Trip'
import { TripWaypoint } from '../trip-waypoint/trip-waypoint'

export const TripsItem = ({ trip }: { trip: Trip }) => {
    return (
        <StyledTripsItem>
            <div className="driver">{trip.vehicle?.make} {trip.vehicle?.model}</div>
            <div>{trip.price.amount} {trip.price.currency} </div>
            {trip.waypoints.map((waypoint) => <TripWaypoint key={waypoint.date_time} waypoint={waypoint}></TripWaypoint>)}
        </StyledTripsItem>
    )
}

