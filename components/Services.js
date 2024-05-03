import React from 'react';
import Service from "@/components/Service";
import service1 from '../img/service1.png'
import service2 from '../img/service2.png'
import service3 from '../img/service3.png'
import service4 from '../img/service4.png'

const Services = () => {
  return (
    <div id={'services'} style={{
      padding: '4rem 2rem',
      backgroundColor: '#f8f8f8',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#e53935',
        marginBottom: '2rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>Our Services</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        justifyItems: 'center'
      }}>
        <Service
          image={service1}
          heading={'Master Chef'}
          sub={'We have master chefs from all over the world'}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            transition: 'transform 0.3s ease'
          }}
          imageStyle={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '1rem'
          }}
          headingStyle={{
            fontSize: '1.5rem',
            color: '#e53935',
            marginBottom: '0.5rem'
          }}
          subStyle={{
            color: '#666'
          }}
          containerStyle={{
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }
          }}
        />
        <Service
          image={service2}
          heading={'Quality Pizza'}
          sub={'Good rated 5 stars by more than 1000+ customers'}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            transition: 'transform 0.3s ease'
          }}
          imageStyle={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '1rem'
          }}
          headingStyle={{
            fontSize: '1.5rem',
            color: '#e53935',
            marginBottom: '0.5rem'
          }}
          subStyle={{
            color: '#666'
          }}
          containerStyle={{
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }
          }}
        />
        <Service
          image={service3}
          heading={'Online Order'}
          sub={'Helps you save time as dont have to go the restuarant'}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            transition: 'transform 0.3s ease'
          }}
          imageStyle={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '1rem'
          }}
          headingStyle={{
            fontSize: '1.5rem',
            color: '#e53935',
            marginBottom: '0.5rem'
          }}
          subStyle={{
            color: '#666'
          }}
          containerStyle={{
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }
          }}
        />
        <Service
          image={service4}
          heading={'24/7 service'}
          sub={'You can call at anytime and we will be available'}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            transition: 'transform 0.3s ease'
          }}
          imageStyle={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginBottom: '1rem'
          }}
          headingStyle={{
            fontSize: '1.5rem',
            color: '#e53935',
            marginBottom: '0.5rem'
          }}
          subStyle={{
            color: '#666'
          }}
          containerStyle={{
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }
          }}
        />
      </div>
    </div>
  )
}

export default Services;