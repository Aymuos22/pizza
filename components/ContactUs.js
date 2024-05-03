import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/messages', data);
      console.log(response.data);
      setIsSubmitting(false);
      reset();
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5' }} id={'contact'}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '2rem' }}>Contact Us</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <div style={{ width: '30%', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <FaPhone style={{ color: '#333', fontSize: '1.5rem', marginRight: '1rem' }} />
            <p style={{ color: '#333' }}>Call us at <a style={{ color: '#007bff', textDecoration: 'none' }} href="tel:+123456789">6371688200</a></p>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1rem 0' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <FaEnvelope style={{ color: '#333', fontSize: '1.5rem', marginRight: '1rem' }} />
            <p style={{ color: '#333' }}>Email us at <a style={{ color: '#007bff', textDecoration: 'none' }} href="mailto:info@pizzashop.com">test@test.com</a></p>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1rem 0' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <FaMapMarkerAlt style={{ color: '#333', fontSize: '1.5rem', marginRight: '1rem' }} />
            <p style={{ color: '#333' }}>33/2A, Officer's Line,<br />Near Thirumala Theatre,<br />Vellore Cantonment,<br />Vellore - 632001<br />Tamil Nadu, India.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '50%', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#333', fontWeight: 'bold' }} htmlFor="name">Name</label>
            <input placeholder={'Enter your name'} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} type="text" id="name" {...register('name', { required: true })} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#333', fontWeight: 'bold' }} htmlFor="email">Email</label>
            <input placeholder={'Enter your email'} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} type="email" id="email" {...register('email', { required: true })} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: '#333', fontWeight: 'bold' }} htmlFor="message">Message</label>
            <textarea placeholder={'Send your reviews or any queries if you have'} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', resize: 'vertical' }} id="message" {...register('message', { required: true })} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;