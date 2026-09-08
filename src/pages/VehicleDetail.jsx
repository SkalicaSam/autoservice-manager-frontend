import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehicleDetail() {

    const { id } = useParams();

    const [selectedVehicle, setSelectedVehicle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/vehicles/${id}`)
            .then(response => response.json())
            .then(data => {
                setSelectedVehicle(data);
            });
    }, [id]);

    return (
        <div>
            <h1>Vehicle detail</h1>

            {selectedVehicle && (
                <div>
                    <p>
                        Brand: {selectedVehicle.brand}
                    </p>

                    <p>
                        Model: {selectedVehicle.model}
                    </p>

                    <p>
                        License plate: {selectedVehicle.licensePlate}
                    </p>
                </div>
            )}
        </div>
    );
}

export default VehicleDetail;
