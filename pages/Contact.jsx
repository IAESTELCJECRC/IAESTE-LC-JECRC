import React, { useState } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        setFocused({ ...focused, [field]: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Thank you for your message! We'll get back to you soon.");
            setForm({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const contactInfo = [
        {
            icon: <LocationOnIcon />,
            title: "Address",
            content: "IAESTE INDIA LC JECRC",
            subContent: "Science Block, 3rd Floor, JECRC UNIVERSITY, Jaipur, Rajasthan",
            color: "#0B3D59"
        },
        {
            icon: <PhoneIcon />,
            title: "Phone",
            content: "Devansh Gupta",
            subContent: "(+91) 6376044011",
            color: "#0B3D59"
        },
        {
            icon: <PhoneIcon />,
            title: "Phone",
            content: "Rakshita Rathore",
            subContent: "(+91) 7690000331",
            color: "#0B3D59"
        },
        {
            icon: <EmailIcon />,
            title: "Email",
            content: "support@iaestelcjecrc.com",
            subContent: "",
            color: "#0B3D59"
        }
    ];

    const socialLinks = [
        {
            icon: <LinkedInIcon />,
            href: "https://linkedin.com",
            color: "#0077B5",
            name: "LinkedIn"
        },
        {
            icon: <InstagramIcon />,
            href: "https://instagram.com",
            color: "#E4405F",
            name: "Instagram"
        },
        {
            icon: <FacebookIcon />,
            href: "https://facebook.com",
            color: "#1877F2",
            name: "Facebook"
        }
    ];

    return (
        <div style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)",
            padding: "40px 20px",
            paddingTop: "120px"
        }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
                <motion.div variants={itemVariants} style={{ textAlign: "center", marginBottom: "60px" }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 900,
                            background: "linear-gradient(135deg, #0B3D59 0%, #0E517A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "16px",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "#666",
                            fontWeight: 400
                        }}
                    >
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "32px",
                    marginBottom: "60px"
                }}>
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            style={{
                                background: "#ffffff",
                                padding: "32px",
                                borderRadius: "20px",
                                boxShadow: "0 10px 30px rgba(11, 61, 89, 0.1)",
                                border: "1px solid rgba(11, 61, 89, 0.1)",
                                transition: "all 0.3s ease",
                                cursor: "default"
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "16px",
                                    background: `${info.color}15`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "20px",
                                    color: info.color
                                }}
                            >
                                {info.icon}
                            </motion.div>
                            <h3 style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#0B3D59",
                                marginBottom: "8px"
                            }}>
                                {info.title}
                            </h3>
                            <p style={{
                                fontSize: "0.95rem",
                                color: "#333",
                                fontWeight: 600,
                                marginBottom: "4px",
                                lineHeight: 1.5
                            }}>
                                {info.content}
                            </p>
                            {info.subContent && (
                                <p style={{
                                    fontSize: "0.9rem",
                                    color: "#666",
                                    lineHeight: 1.5
                                }}>
                                    {info.subContent}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "32px"
                }}>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            background: "#ffffff",
                            padding: "clamp(24px, 5vw, 48px)",
                            borderRadius: "24px",
                            boxShadow: "0 20px 40px rgba(11, 61, 89, 0.1)",
                            border: "1px solid rgba(11, 61, 89, 0.1)"
                        }}
                    >
                        <h2 style={{
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            fontWeight: 800,
                            color: "#0B3D59",
                            marginBottom: "32px",
                            letterSpacing: "-0.02em"
                        }}>
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Name *
                                    </label>
                                    <motion.input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("name")}
                                        onBlur={() => handleBlur("name")}
                                        type="text"
                                        required
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.name ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Email *
                                    </label>
                                    <motion.input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("email")}
                                        onBlur={() => handleBlur("email")}
                                        type="email"
                                        required
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.email ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Phone
                                    </label>
                                    <motion.input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("phone")}
                                        onBlur={() => handleBlur("phone")}
                                        type="tel"
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.phone ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Message *
                                    </label>
                                    <motion.textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("message")}
                                        onBlur={() => handleBlur("message")}
                                        required
                                        rows={6}
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.message ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none",
                                            resize: "vertical",
                                            fontFamily: "inherit"
                                        }}
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: "100%",
                                        padding: "16px 32px",
                                        borderRadius: "12px",
                                        background: isSubmitting ? "#999" : "linear-gradient(135deg, #0B3D59 0%, #0E517A 100%)",
                                        color: "#fff",
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        border: "none",
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                        boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(11, 61, 89, 0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        transition: "all 0.3s ease",
                                        marginTop: "8px"
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    border: "3px solid rgba(255,255,255,0.3)",
                                                    borderTop: "3px solid white",
                                                    borderRadius: "50%"
                                                }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <SendIcon style={{ fontSize: "20px" }} />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: "#ffffff",
                            padding: "clamp(24px, 5vw, 48px)",
                            borderRadius: "24px",
                            boxShadow: "0 20px 40px rgba(11, 61, 89, 0.1)",
                            border: "1px solid rgba(11, 61, 89, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <h2 style={{
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                fontWeight: 800,
                                color: "#0B3D59",
                                marginBottom: "32px",
                                letterSpacing: "-0.02em"
                            }}>
                                Connect With Us
                            </h2>
                            <p style={{
                                fontSize: "1rem",
                                color: "#666",
                                lineHeight: 1.6,
                                marginBottom: "40px"
                            }}>
                                Follow us on social media to stay updated with our latest events, news, and opportunities.
                            </p>
                        </div>

                        <div style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap"
                        }}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -4,
                                        rotate: [0, -5, 5, 0]
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "16px",
                                        background: "#f8f9fa",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: social.color,
                                        border: `2px solid ${social.color}20`,
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                    }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                marginTop: "40px",
                                padding: "24px",
                                borderRadius: "16px",
                                background: "linear-gradient(135deg, rgba(11, 61, 89, 0.05) 0%, rgba(14, 81, 122, 0.05) 100%)",
                                border: "1px solid rgba(11, 61, 89, 0.1)"
                            }}
                        >
                            <p style={{
                                fontSize: "0.9rem",
                                color: "#666",
                                lineHeight: 1.6,
                                margin: 0,
                                textAlign: "center"
                            }}>
                                <strong style={{ color: "#0B3D59" }}>Office Hours:</strong><br />
                                Monday - Friday: 9:00 AM - 5:00 PM<br />
                                Saturday: 10:00 AM - 2:00 PM
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
