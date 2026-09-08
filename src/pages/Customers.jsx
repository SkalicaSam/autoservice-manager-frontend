import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Customers() {

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

                    <Link to={`/customers/${customer.id}`}>
                        Detail
                    </Link>
                </div>
            ))}

        </div>
    );
}

export default Customers;