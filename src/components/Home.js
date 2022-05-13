import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'

function Home() {
    const dispatch = useDispatch()
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    // console.log(restaurantReducer);
    const { restaurants } = restaurantReducer


    useEffect(() => {
        dispatch(listRestaurants());
    }, [dispatch])
    
    console.log("my data:", restaurants);

    // const [hotel, setHotel] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('/restaurants.json')
    //             .then(data => data.json())
    //             .then(data => setHotel(data.restaurants))
    //     }
    //     fetchData();
    // }, [])
    // console.log("our data", hotel);
    return (
        <Row>
            {restaurants ? (restaurants.map(item => (
                <Col sm={12} md={8} lg={4} xl={3}>
                    <RestaurantCard data={item} />
                </Col>
            ))) : null}

        </Row>
    )
}
export default Home
