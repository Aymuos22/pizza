import service_image from '../img/service1.png'
import Image from "next/image";

const Service = ({ image, heading, sub }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      transition: 'transform 0.3s ease'
    }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <Image src={image} alt={''} width={100} height={100} style={{
          objectFit: 'cover'
        }} />
      </div>
      <div style={{
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#e53935',
          marginBottom: '0.5rem'
        }}>{heading}</h2>
        <p style={{
          color: '#666'
        }}>{sub}</p>
      </div>
    </div>
  )
}

export default Service;