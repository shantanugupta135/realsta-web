import React, { useState } from "react";
import { CardItem } from "./types";
import { Row, Col } from "react-bootstrap";
import "./propertiesBrochure.css";
import ResourcesModal from "./ResourcesModal"; // Import the modal

function PropertiesBrocure({ data }: { data: CardItem }) {
    const [showModal, setShowModal] = useState(false);

    // Download handler after modal form is submitted
    const handleModalDownload = () => {
        setShowModal(false);
        if (data.brocher) {
            const link = document.createElement("a");
            link.href = data.brocher;
            link.download = "Brochure.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return data.brocher ? (
        <section style={{ height: "100%" }}>
            <ResourcesModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onDownload={handleModalDownload}
            />
            <Row>
                <Col md={12}>
                    <h2 className="ip_amenities_heading">Brochure</h2>
                    <hr className="ip_hr" />
                </Col>
            </Row>
            <Row className="mt-4" style={{ flex: 1, minHeight: 0, alignItems: "flex-end", display: "flex" }}>
                <Col md={8} className="brochure-container d-flex flex-column justify-content-end align-items-center" style={{ height: "100%" }}>
                    <img src={data.brocher_image} alt="brocher" className="brochure-image" />
                    <button
                        className="btn-primary-alternative-custom download-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Download Brochure
                    </button>
                </Col>
            </Row>
        </section>
    ) : null;
}

export default PropertiesBrocure;