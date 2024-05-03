import React from 'react';
import Image from "next/image";
import pizza1 from '../public/img/pizza.png'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
  console.log(pizza.img)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      width: '300px',
      margin: '1rem'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link href={`/product/${pizza._id}`}>
          <Image src={pizza.img} height={200} width={200} style={{ borderRadius: '50%' }} />
        </Link>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>{pizza.title}</h2>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {pizza.desc}
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>{pizza.prices[0]}</p>
      </div>
    </div>
  );
};

export default PizzaCard;