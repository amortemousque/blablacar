export interface Trip {
    link: string;
    waypoints: Waypoint[];
    price: any;
    vehicle: any;
    distance_in_meters: number;
    duration_in_seconds: number;

}

export interface Waypoint {
    place: any;
    date_time: string;
}