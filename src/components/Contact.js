"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { ANIMATIONS } from "../constants/colors";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('');

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
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFeedback(`Error: ${result.message}`);
            }
        } catch (error) {
            setFeedback(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            value: "mohammedshoaibasim2003@gmail.com",
            link: "mailto:mohammedshoaibasim2003@gmail.com",
            color: "text-neon-cyan"
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: "+91 8520830702",
            link: "tel:+919876543210",
            color: "text-green-400"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "Hyderabad, India",
            link: "#",
            color: "text-neon-pink"
        }
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/mohammed-shoaib-asim-b04467206",
            color: "hover:text-blue-400",
            glow: "hover:shadow-glow-primary"
        },
        {
            icon: FaGithub,
            href: "https://github.com/shoaib-asim17",
            color: "hover:text-gray-300",
            glow: "hover:shadow-glow-primary"
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/_.shoaib.asim._/",
            color: "hover:text-pink-400",
            glow: "hover:shadow-glow-accent"
        },
        {
            icon: FaTwitter,
            href: "https://twitter.com/",
            color: "hover:text-blue-400",
            glow: "hover:shadow-glow-primary"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                        Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-6">
                        Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                    </p>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-text-primary mb-6">
                                Get In Touch
                            </h3>
                            <p className="text-text-tertiary text-lg leading-relaxed mb-8">
                                I'm always excited to work on new projects and collaborate with fellow developers. 
                                Whether you have a question, want to discuss a project, or just want to say hello, 
                                feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center space-x-4 p-4 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl hover:border-neon-cyan/50 transition-all duration-300 group"
                                >
                                    <div className={`p-3 rounded-full bg-dark-bg-tertiary/50 border border-glass-border group-hover:border-neon-cyan/50 transition-colors duration-300`}>
                                        <info.icon className={`w-5 h-5 ${info.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-text-primary font-medium">{info.title}</h4>
                                        <p className="text-text-secondary text-sm">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-text-primary mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ 
                                            scale: 1.2, 
                                            y: -5,
                                            boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-text-secondary ${social.color} ${social.glow} transition-all duration-300 p-3 rounded-full border border-glass-border hover:border-neon-cyan bg-dark-bg-tertiary/30`}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-glow-primary"
                    >
                        <h3 className="text-2xl font-bold text-text-primary mb-6">
                            Send Message
                        </h3>

                        {feedback && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mb-6 p-4 rounded-lg ${
                                    feedback.includes('successfully') 
                                        ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                                }`}
                            >
                                {feedback}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    Name
                                </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                                    className="w-full px-4 py-3 bg-dark-bg-secondary/50 border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300"
                            placeholder="Your Name"
                        />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email
                                </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                                    className="w-full px-4 py-3 bg-dark-bg-secondary/50 border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300"
                            placeholder="Your Email"
                        />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message
                                </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-dark-bg-secondary/50 border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all duration-300 resize-none"
                            placeholder="Your Message"
                                />
                            </motion.div>

                            <motion.button
                        type="submit"
                        disabled={loading}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                    loading 
                                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-primary text-dark-bg hover:shadow-glow-primary'
                                }`}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>
                </form>
                    </motion.div>
            </div>
        </div>
        </section>
    );
};

export default Contact;