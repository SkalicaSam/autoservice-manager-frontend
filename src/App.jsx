import { useEffect, useState } from "react";

function App() {

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {

    fetch("http://localhost:8080/api/customers")
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
      });

  }, []);

  function getCustomerDetail(id) {

    fetch(`http://localhost:8080/api/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCustomer(data);
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
      </div>
    )}

    </div>
  );
}

export default App;
