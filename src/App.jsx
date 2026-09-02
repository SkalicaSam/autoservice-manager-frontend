import { useEffect, useState } from "react";

function App() {

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {

    fetch("http://localhost:8080/api/customers")
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
      });

  }, []);

  function getCustomerDetail(id) {

      setSelectedVehicle(null);

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
  }

  function getVehicleDetail(id) {
      fetch(`http://localhost:8080/api/vehicles/${id}`)
          .then(response => response.json())
          .then(data => {
              setSelectedVehicle(data);
          });
  }

  return (
    <div>

      <h1>Customers</h1>

      {customers.map(customer => (
        <div key={customer.id}>
          {customer.firstName} {customer.lastName}
          <button onClick={() => getCustomerDetail(customer.id)}>
            Detail
          </button>
        </div>
      ))}

    {selectedCustomer && (
      <div>
        <h2>Customer detail</h2>

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
                <button onClick={() => getVehicleDetail(vehicle.id)}>
                    Detail
                </button>

            </div>
        ))}

    {selectedVehicle && (
        <div>
            <h2>Vehicle detail</h2>

            <p>
                Brand: {selectedVehicle.brand}
            </p>

            <p>
                Model: {selectedVehicle.model}
            </p>

            <p>
                License plate: {selectedVehicle.licensePlate}
            </p>

            <p>
                Total spent: {selectedVehicle.totalSpent}
            </p>

            <p>
                Last service: {selectedVehicle.lastServiceDate}
            </p>
        </div>
    )}



      </div>



    )}

    </div>
  );
}

export default App;
