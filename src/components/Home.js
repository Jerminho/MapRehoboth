// src/components/Home.js
import React from 'react';
import './Home.css'; // Je kunt een aparte CSS voor Home component maken indien gewenst

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welkom bij onze Kerk!</h1>
      </header>
      <main className="home-content">
        <section className="home-intro">
          <h2>Nieuws en Evenementen</h2>
          <p>Blijf op de hoogte van de laatste nieuws en evenementen die plaatsvinden in onze kerk.</p>
          {/* Je kunt hier een lijst met nieuwsitems en evenementen toevoegen */}
        </section>
        <section className="home-services">
          <h2>Onze Diensten</h2>
          <p>Bekijk onze wekelijkse diensten en speciale evenementen.</p>
          {/* Voeg hier een overzicht van diensten toe */}
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Onze Kerk. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}

export default Home;
