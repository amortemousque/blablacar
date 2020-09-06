
import React from 'react'
import { Waypoint } from '../../models/Trip'

export const TripWaypoint = (props: { waypoint: Waypoint }) => {

    const formatDate = (date: string) => {
        return new Date(props.waypoint.date_time).toLocaleString()
    }

    return (
        <div>{props.waypoint.place.city} - {formatDate(props.waypoint.date_time)}</div>
    )
}
