import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="p-5">Our Special Services</h2>
            <div className="row container m-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;