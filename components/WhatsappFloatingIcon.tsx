// WhatsAppFloatingButton.js
"use client";

import Image from "next/image";

const WhatsAppFloatingIcon = () => {
    return (
        <button
            onClick={() => window.open('https://wa.me/+917840001269', '_blank', 'noopener,noreferrer')}
            style={{
                height: '50px',
                width: '50px',
                position: 'fixed',
                bottom: '3rem',
                right: '3rem',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                padding: '16px',
                fontSize: '24px',
                zIndex: 1000,
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            aria-label="Chat on WhatsApp"
        >
            {/* <i className="fa-solid fa-brands fa-whatsapp"></i> */}
            <Image
                src="/assets/whatsapp.svg"
                alt="Chat on WhatsApp"
                width={24}
                height={24}
            />
        </button>
    );
};

export default WhatsAppFloatingIcon;
