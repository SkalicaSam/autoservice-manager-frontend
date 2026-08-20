import { useEffect, useState } from "react";

function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/api/customers")
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
      });

  }, []);

  return (
    <div>
      <h1>Customers</h1>

      {customers.map(customer => (
        <div key={customer.id}>
          {customer.firstName} {customer.lastName}
        </div>
      ))}
    </div>
  );
}

export default App;
