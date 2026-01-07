"use client";
import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu';
import './Resources.css';
import ReadyToTalk from './ReadyToTalk';
import ResourcesModal from './ResourcesModal';
import Head from 'next/head';

const resourceFiles = [
    {
        "id": 1,
        "name": "Realsta Profile",
        "path": "assets/download/resources/Realsta Profile - FINAL.pdf",
        "file_img": "assets/resources/Realsta Company Profile.webp"
    },
    {
        "id": 1,
        "name": "Market View Report Q4 2024",
        "path": "assets/download/resources/Market View Report Q4 2024.pdf",
        "file_img": "assets/resources/Rectangle 1421.webp"
    },
    {
        "id": 1,
        "name": "Market View Report Q3 2024",
        "path": "assets/download/resources/Market View Report Q3 2024.pdf",
        "file_img": "assets/resources/Market View Report Q3 2024.webp"
    },
    {
        "id": 1,
        "name": "Market View Report Q2 2024",
        "path": "assets/download/resources/Market View Report Q2 2024.pdf",
        "file_img": "assets/resources/Market View Report Q2 2024.webp"
    },
    {
        "id": 1,
        "name": "Market Activity Report - Q4 2024",
        "path": "assets/download/resources/Market Activity Report - Q4 2024.pdf",
        "file_img": "assets/resources/Market Activity Report Q4.webp"
    },
    {
        "id": 1,
        "name": "Market Activity Report - Q3 2024",
        "path": "assets/download/resources/Market Activity Report - Q3 2024.pdf",
        "file_img": "assets/resources/Market Activity Report Q3.webp"
    },
    {
        "id": 1,
        "name": "Market Activity Report - Q2 2024",
        "path": "assets/download/resources/Market Activity Report - Q2 2024.pdf",
        "file_img": "assets/resources/Market Activity Report Q2.webp"
    },
    {
        "id": 1,
        "name": "Market Activity Report - Q1 2025",
        "path": "assets/download/resources/Market Activity Report - Q1 2025.pdf",
        "file_img": "assets/resources/Market View Report Q1 2025.webp"
    }
];

const Resources = () => {
    const [showModal, setShowModal] = useState(false);
    const [pendingDownload, setPendingDownload] = useState<{ path: string; name: string } | null>(null);

    const handleDownloadRequest = (filePath: string, fileName: string) => {
        setPendingDownload({ path: filePath, name: fileName });
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setPendingDownload(null);
    };

    // Download file directly from modal
    const handleModalDownload = () => {
        if (pendingDownload) {
            fetch(pendingDownload.path)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.blob();
                })
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = pendingDownload.name;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                    // Show thank you alert after download
                    alert(
                      "Thank you for downloading our report!\n\nWe’re excited to share these insights with you. Please feel free to reach out at enquiry@realsta.com if you'd like to discuss the findings further."
                    );
                })
                .catch(() => {
                    alert(
                      "Sorry we couldn’t complete your request.\nPlease check your connection or try again."
                    );
                });
        }
        setShowModal(false);
        setPendingDownload(null);
    };

    return (
        <>
            <ResourcesModal show={showModal} onClose={handleModalClose} onDownload={handleModalDownload} />
            <section>
                <NavigationMenu />
                <div className="customContainer">
                    <div className="r-heading text-center pt-5 pb-5">Resources</div>
                    <div className="customContainer r-file-wrapper row justify-content-between">
                        {resourceFiles.map((file) => (
                            <div className="r-example-2 card col-12 col-md-4 mb-5 align-items-center" key={file.path}>
                                <div className="r-wrapper" style={{ position: 'relative', background: 'none', height: '100%' }}>
                                    <img
                                        loading="lazy"
                                        src={file.file_img}
                                        alt={file.name}
                                        className='r-file-image'
                                    />
                                    <div className='r-file-name'>
                                        <button
                                            className="btn-primary-custom r-download-button border-0"
                                            onClick={() => handleDownloadRequest(file.path, file.name.endsWith('.pdf') ? file.name : file.name + '.pdf')}
                                        >
                                            Download Report<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ReadyToTalk />
        </>
    )
}

export default Resources
