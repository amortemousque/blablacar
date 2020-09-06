import React from 'react';
import { mount, shallow } from 'enzyme'
import { TripsItem } from './TripsItem';



it('Should show a trip.', () => {

    let trip = {
        "link": "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2031176681-paris-a7-sortie-1-gerland",
        "waypoints": [{
            "date_time": "2020-08-19T17:00:00Z",
            "place": {
                "city": "Paris",
                "address": "20 Place Henri Langlois, Paris",
                "latitude": 48.831449,
                "longitude": 2.355514,
                "country_code": "FR"
            }
        }, {
            "date_time": "2020-08-19T21:50:00Z",
            "place": {
                "city": "Lyon",
                "address": "84 Quai Perrache, Lyon",
                "latitude": 45.734521,
                "longitude": 4.818071,
                "country_code": "FR"
            }
        }],
        "price": {
            "amount": "36.25",
            "currency": "EUR"
        },
        "vehicle": {
            "make": "PEUGEOT",
            "model": "3008"
        },
        "distance_in_meters": 459545,
        "duration_in_seconds": 17400
    }

    const exhibitorItem = shallow(<TripsItem trip={trip}></TripsItem>)
    expect(exhibitorItem.find('.driver')).toContain('PEUGEOT');
});