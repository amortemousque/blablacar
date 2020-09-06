import { useSWRInfinite } from "swr"

export const usePaginatedTrips = () => {
    const getKey = (pageIndex: any, previousPageData: any) => {
        if (previousPageData && !previousPageData.next_cursor) return null // reached the end

        return process.env.REACT_APP_API_URL + '/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2020-07-10T20:00:00&currency=EUR' + (previousPageData && previousPageData.next_cursor ? `&from_cursor=${previousPageData.next_cursor}` : '')
    }
    const { data, size, setSize } = useSWRInfinite(getKey)

    return {
        trips: data?.flatMap(d => d.trips) || [],
        //@ts-ignore
        loadMore: () => setSize(size + 1),
    }

}