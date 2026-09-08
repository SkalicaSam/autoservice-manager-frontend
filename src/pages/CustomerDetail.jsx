import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CustomerDetail() {

    const { id } = useParams();

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:8080/api/customers/${id}`)
            .then(response => response.json())
            .then(data => {
                setSelectedCustomer(data);
            });

        fetch(`http://localhost:8080/api/customers/${id}/vehicles`)
            .then(response => response.json())
            .then(data => {
                setVehicles(data);
            });

    }, [id]);

    return (
        <div>

            {selectedCustomer && (
                <div>

                    <h1>Customer detail</h1>

                    <p>
                        Name: {selectedCustomer.firstName} {selectedCustomer.lastName}
                    </p>

                    <p>
                        Phone: {selectedCustomer.phone}
                    </p>

                    <h2>Vehicles</h2>

                    {vehicles.map(vehicle => (
                        <div key={vehicle.id}>
                            {vehicle.brand} {vehicle.model} - {vehicle.licensePlate}
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default CustomerDetail;