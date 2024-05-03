import Image from "next/image";
import hero from '../img/hero_main.png';

const Hero = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 64px)', // Adjust this value based on your header height
      padding: '2rem',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '400px',
          textAlign: 'left',
          marginRight: '2rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#e53935',
            marginBottom: '1rem'
          }}>Hungry? You are at the right place...</h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#333',
            marginBottom: '2rem'
          }}>
            Go ahead, explore our menu and place your order today. We guarantee you'll love every bite of our delicious pizza!
          </p>
          <div style={{ paddingRight: 0 }}>
            <a
              href={'#menu'}
              style={{
                backgroundColor: '#e53935',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '1.2rem'
              }}
            >
              Order Now!
            </a>
          </div>
        </div>
        <div style={{
          maxWidth: '300px'
        }}>
          <Image src={hero} alt={'image'} width={300} height={300} style={{
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
          }} />
        </div>
      </div>
    </div>
  )
}

export default Hero;