import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BsAlignCenter } from 'react-icons/bs'

function FAQ() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Frequently Asked Quetions</h6>
                </div>
                <div>


                    <strong>Frequently Asked Questions (FAQs)</strong> <br />

                    <strong>1. What is POZY Trains?</strong> <br />
                    POZY Trains is a modern train service designed to offer convenient, reliable, and comfortable travel experiences. We aim to make your journey enjoyable with state-of-the-art facilities and excellent customer service.
                    <br /><br />
                    <strong>2. How can I book a ticket?</strong><br />
                    You can book tickets through our website or mobile app. Simply select your departure and destination stations, choose your preferred travel date and time, and follow the prompts to complete your booking.
                    <br /> <br />
                    <strong>3. What payment methods do you accept?</strong><br />
                    We accept various payment methods including credit and debit cards, as well as digital payment options like PayPal.
                    <br /> <br />
                    <strong>4. Can I change or cancel my booking?</strong><br />
                    Yes, you can change or cancel your booking through our website or app. Please refer to our cancellation policy for details on fees and deadlines.
                    <br /><br />
                    <strong>5. What should I do if I lose my ticket?</strong><br />
                    If you lose your ticket, please contact our customer support team as soon as possible. They will assist you with reissuing a ticket or providing a suitable solution.
                    <br /> <br />
                    <strong>6. Are there any discounts available?</strong><br />
                    We offer various discounts and promotions throughout the year. Check our website or subscribe to our newsletter to stay updated on the latest offers.
                    <br /><br />
                    <strong>7. What facilities are available on board?</strong><br />
                    Our trains are equipped with comfortable seating, Wi-Fi, power outlets, and refreshments. Some routes may also offer additional amenities such as extra luggage space and entertainment options.
                    <br /><br />
                    <strong>8. How can I contact customer support?</strong><br />
                    You can reach our customer support team via email, phone, or live chat on our website. Our team is available 24/7 to assist you with any queries or concerns.
                    <br /><br />
                    <strong>9. Is there a loyalty program?</strong><br />
                    Yes, we have a loyalty program that rewards frequent travelers with points that can be redeemed for discounts, free tickets, and other benefits. For more details, visit our loyalty program page on the website.
                    <br /><br />
                    <strong>10. How do I provide feedback about my experience?</strong><br />
                    We welcome your feedback! You can submit your comments or suggestions through our feedback form on the website, or by contacting our customer support team directly.
                    <br /><br />
                    For any other questions or additional information, please feel free to get in touch with us. We’re here to help make your journey with POZY Trains as pleasant as possible!

                    ---
                    <p></p>

                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Help</h6>
                    </div>
                    <div>
                        For futher assistance feel free to <a href="/Contact">Contact </a>us.
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default FAQ