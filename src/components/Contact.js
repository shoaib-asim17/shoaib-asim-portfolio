"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import { useTheme } from '../app/ThemeContext'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('');
    const { theme } = useTheme(); // Get the current theme

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback('');
    
        const juvvu = process.env.NEXT_PUBLIC_JUVVU;
    
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    access_key: juvvu,
                }),
            });
    
            const result = await response.json();
            if (response.ok) {
                setFeedback('Form submitted successfully!');
            } else {
                setFeedback(`Error: ${result.message}`);
            }
        } catch (error) {
            setFeedback(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex max-w-full w-full items-center justify-center ${theme === 'dark' ? ' text-white' : ' text-gray-800'}`}>
            <div className={`max-w-md w-full p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`} style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.5)' }}>
            {/* <h1 className="font-lato font-light text-center text-4xl tracking-tight mb-8 bg-yellow-100 rounded-3xl text-gray-900 dark:text-black">
  Contact Me
</h1> */}
      <h2 className={`text-5xl font-sans font-bold text-center py-8 mb-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>📬 Let's Connect!</h2>


                <p className="text-center mb-4">Feel free to reach out for any inquiries or collaboration!</p>
                {feedback && <p className="text-center mb-4 text-green-500">{feedback}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-600 border-gray-500' : 'border-gray-300'}`}
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200`}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;