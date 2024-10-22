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
                    access_key: 'process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY',

                }),
            });

            if (response.ok) {
                // Show success message
                setFeedback('Your message has been sent successfully!');
            } else {
                // Handle error
                const errorData = await response.json();
                setFeedback(`Error: ${errorData.message}`);
            }
        } catch (error) {
            // Handle network error
            setFeedback('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className={`max-w-md w-full p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`} style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.5)' }}>
                <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
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
