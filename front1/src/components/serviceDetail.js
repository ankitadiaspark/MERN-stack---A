import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const ServiceDetail = () => {
    const [service, setServiceName] = useState('');
    const [serviceDescription, setServiceNameDescription] = useState('');
    const [showBooking, setShowBooking] = useState(false);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        axios
      .get(`http://localhost:7898/api/services/${params['*']}`)
      .then((res) => {
        console.log(res);
        if(res.data.name == "create-booking"){
            setShowBooking(true)
        }
        setServiceName(res.data.name)
        setServiceNameDescription(res.data.description)
      })
      .catch((err) => console.log("error fetching data", err));
    },[]);

    return (
        <React.Fragment>
            <div>Service Detail</div>
            <h1>{service}</h1>
            <h3>{serviceDescription}</h3>
            {showBooking && <h2> Create your booking <Link to='/service-booking'>here</Link></h2>}
            <h2>Go back to see the <Link to='/'>Service List</Link></h2>
            </React.Fragment>
        )
}


export default ServiceDetail;
