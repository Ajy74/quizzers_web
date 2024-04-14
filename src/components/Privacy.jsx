import React from "react";
import '../css/privacy.css';

const Privacy = () => {
    return (
        <>
            <div className="privacy-container">
                <h1 className="privacy-title">Privacy Policy</h1>
                <div className="privacy-content">
                    <h2>Effective Date: 12/04/2024</h2>

                    <h3>Introduction:</h3>
                    <p>Welcome to Quizzers, a quiz app designed to provide users with an engaging platform to participate in quiz contests and enhance their knowledge. This privacy policy outlines how we collect, use, and protect your personal information when you use our app.</p>

                    <h3>Information We Collect:</h3>
                    <ul>
                        <li><span>Registration Information: </span> When you register for an account on Quizzers, we collect information such as your username, profile photo, email address (if provided), and mobile number. This information is used to create and personalize your account.</li>
                        <li><span>KYC Information: </span> In order to participate in real quiz contests and withdraw winnings, users are required to complete a Know Your Customer (KYC) verification process. This includes providing identification documents such as Aadhar card, PAN card, voter card, or passport, as well as bank account details or UPI information for withdrawal purposes.</li>
                        <li><span>Practice Quiz Data: </span> We collect data related to your interactions with practice quizzes, including quiz responses and performance metrics. This information is used to improve the app experience and tailor content to your preferences.</li>
                        <li><span>Transaction Information: </span> When you add funds to your wallet or withdraw winnings, we collect transaction details such as the amount, date, and payment method used.</li>
                        <li><span>Other Information: </span> We may also collect non-personal information such as device information, IP address, and usage data for analytics and security purposes.</li>
                    </ul>


                    <h3>How We Use Your Information:</h3>
                    <ul>
                        <li><span>To Provide Services: </span> We use the information collected to provide you with access to the features and services offered by Quizzers, including participating in quiz contests and accessing educational content.</li>
                        <li><span>Account Management: </span>Your registration information is used to manage your account, including authentication, profile customization, and communication with you.</li>
                        <li><span>KYC Verification: </span>KYC information is collected and verified to comply with legal requirements and ensure the security of financial transactions.</li>
                        <li><span>Improving User Experience: </span>We analyze practice quiz data and user feedback to improve our content, features, and overall user experience.</li>
                        <li><span>Transactional Purposes: </span>Transaction information is used for processing payments, facilitating withdrawals, and maintaining transaction records.</li>
                    </ul>

                                        
                    <h3>Data Sharing:</h3>
                    <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our app, conducting business, or servicing you, subject to confidentiality agreements.</p>

                    <h3>Data Security:</h3>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure server hosting, and regular security audits.</p>

                    <h3>User Rights:</h3>
                    <p>You have the right to access, update, or delete your personal information at any time. You can also opt-out of receiving promotional communications from us by following the instructions provided in such communications.</p>

                    <h3>Policy Updates:</h3>
                    <p>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.</p>

                    <h3>Contact Us:</h3>
                    <p>If you have any questions or concerns about our privacy practices or this policy, please contact us at <span className="companyEmail">quizzers14@gmail.com</span> .</p>

                    <h3>Legal Compliance:</h3>
                    <p>Quizzers complies with applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR) .</p>
                    {/* <p>Quizzers complies with applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p> */}
                </div>
            </div>
        </>
    );
}

export default Privacy ;