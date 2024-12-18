import React, { useEffect, useState } from "react";
import { getClient } from "../../services/clientService";
import "./Clients.css";

const ClientsSection = () => {
  const [client, setClient] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchClient();
    }
  }, [isDataFetched]);

  const fetchClient = async () => {
    try {
      const clientData = await getClient();
      setClient(clientData.data);
      setIsDataFetched(true);
      console.log(clientData.data, "clients");
    } catch (error) {
      console.error("Error fetching client:", error);
    }
  };

  return (
    <section id="Clients" className="clients-section container">
      <h2>Our Clients</h2>
      <p>Genius minds with endless tweaks, keeping us on our toes for weeks.</p>
      <div className="clients-grid">
        {client.map((clientItem, index) => (
          <div key={clientItem._id} className="client-card">
            <img src={clientItem.clientName} alt="" srcset="" />{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
