import React, { useState } from "react";
import '../css/support.css'

const Support = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        {
          question: "How do I participate in quiz contests?",
          answer: "To participate in quiz contests, navigate to the 'Contests' section of the app and select the contest you wish to join. Follow the instructions provided to enter the contest and answer the questions."
        },
        {
          question: "What are the payment options available?",
          answer: "Currently, we accept payments via credit/debit cards, net banking, and UPI (Unified Payments Interface). You can add funds to your wallet using any of these payment methods."
        },
        {
          question: "How can I withdraw my winnings?",
          answer: "You can withdraw your winnings by navigating to the 'Wallet' section of the app and selecting the 'Withdraw' option. Follow the instructions provided to complete the withdrawal process."
        }
    ];

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <>
            <div className="support-container">
                <div className="support-header">
                    <h1>Quizzers Support</h1>
                </div>
                <div className="support-content">
                    <section className="contact-info">
                        <h2>Contact Us</h2>
                        <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                        <ul>
                            <li>Email: <span>support@quizzersapp.com</span></li>
                            <li>Phone: +1234567890</li>
                        </ul>
                    </section>
                    <section className="faq">
                        <h2>FAQs</h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="question" onClick={() => handleToggle(index)}>
                                    <h4>{faq.question}</h4>
                                    <span className="arrow">&#9660;</span>
                                </div>
                                {expandedIndex === index && (
                                    <div className="answer">
                                    <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
                    <section className="feedback-form">
                        <h2>Feedback</h2>
                        <p>Submit your feedback or report issues using the form below:</p>
                        {/* Add feedback form component here */}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Support ;