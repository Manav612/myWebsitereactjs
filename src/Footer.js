import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
    const navItems = [
        ['Home', 'About us', 'Services'],
        ['Partners', 'Success Stories', 'Contact Us'],
        ['Experts', 'Privacy policy', 'Terms & Conditions']
    ];

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <header className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row justify-start gap-48 items-start md:items-center mb-6">
                    <div className="mb-4 md:mb-0">
                        <img src='https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd22b9ae.png&w=48&q=75' />
                        <p className="text-sm mt-2 max-w-xs ">
                            We are 360° business solution providers dedicated to helping you grow at every stage of your journey.
                        </p>
                    </div>
                    <nav className="w-full md:w-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {navItems.map((column, colIndex) => (
                                <div key={colIndex} className="flex flex-col space-y-2">
                                    {column.map((item) => (
                                        <a key={item} href="#" className="hover:text-gray-300">{item}</a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>

            <main className="flex-grow p-4 md:p-6 lg:p-8 flex flex-col justify-between relative">
                <div className="mt-8 absolute right-10 top-0">
                    <input
                        type="email"
                        placeholder="Enter your email to get latest updates"
                        className="bg-transparent border border-white p-2 w-full md:w-64 mb-2 md:mb-0 mr-2"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2">Subscribe</button>
                </div>

                <div className="mt-20">
                    <p className="text-sm mb-4">
                        <strong>Disclaimer:</strong> We are a Start-up consultant in India and professionals in Start-up consultation and understand the requirements of today's enterprises. We are merely a consultancy service-providing company and not in any affiliation/collaboration with any Government/Non-Government Agency / Institutions / Organization / Department.
                    </p>
                    <p className="text-sm">
                        <strong>Note:</strong> Payments for services are only accepted in the name of Egniol Services Private Limited, Egniol Consultancy Services, Egniol Financial Services Private Limited, Egniol Digital Services Private Limited, and the type of account is solely "Current Account" via NEFT/IMPS/RTGS and digital payment wallets (Cash Free, Razor pay, Aggrepay) and we do not accept payments on personal accounts or under any other name.
                    </p>
                </div>
            </main>

            <footer className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>EGNIOL © 2024, All rights reserved.</p>
                        <div className="space-x-4">
                            <a href="#" className="hover:text-gray-300">Privacy notice</a>
                            <a href="#" className="hover:text-gray-300">Legal</a>
                            <a href="#" className="hover:text-gray-300">Cookie settings</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="mailto:info@egniol.co.in" className="hover:text-gray-300">info@egniol.co.in</a>
                        <a href="tel:18005717000" className="hover:text-gray-300">1800 571 7000</a>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Linkedin size={20} />
                        <Facebook size={20} />
                        <Instagram size={20} />
                        <Youtube size={20} />
                        <MessageCircle size={20} />
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;