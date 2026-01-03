"use client";
import React, { useState, useRef, useEffect } from "react";
import { CardItem } from "./types";
import { Row, Col } from "react-bootstrap";
import "./propertiesBrochure.css";
import ResourcesModal from "./ResourcesModal";
import Image from "next/image";

function PropertiesBrocure({ data }: { data: CardItem }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const BASE_URL = "https://api.realsta.com";

    // Parse floor_plan as array of image URLs
    const rawImages: string[] = Array.isArray(data.floor_plan)
        ? data.floor_plan
        : typeof data.floor_plan === "string" && data.floor_plan.trim() !== ""
            ? JSON.parse(data.floor_plan)
            : [];
     const images = rawImages.map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`);
    // Horizontal scroll on wheel (like RelatedProperties)
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            const scrollLeft = el.scrollLeft;
            const maxScrollLeft = el.scrollWidth - el.clientWidth;
            const delta = e.deltaY;

            const scrollingRight = delta > 0;
            const scrollingLeft = delta < 0;

            const atStart = scrollLeft <= 0;
            const atEnd = scrollLeft >= maxScrollLeft;

            const isScrollable = el.scrollWidth > el.clientWidth;

            if (!isScrollable) return;

            if (
                (scrollingRight && !atEnd) ||
                (scrollingLeft && !atStart)
            ) {
                e.preventDefault();
                el.scrollLeft += delta;
            }
        };

        el.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', handleWheel);
        };
    }, []);

    // Download handler after modal form is submitted
    const handleModalDownload = () => {
        setShowModal(false);
        if (selectedImage) {
            const link = document.createElement("a");
            link.href = selectedImage;
            link.download = "FloorPlan.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return images.length ? (
        <section style={{ height: "100%" }}>
            <ResourcesModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onDownload={handleModalDownload}
            />
            <Row className="mt-4" style={{ flex: 1, minHeight: 0, alignItems: "flex-end", display: "flex" }}>
                <Col md={12} style={{ height: "100%" }}>
                    <div
                        ref={scrollRef}
                        className="floorplan-card-scroll d-flex flex-row align-items-end"
                        style={{
                            overflowX: "auto",
                            gap: "2rem",
                            paddingBottom: "2rem",
                            minHeight: "220px"
                        }}
                    >
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="floor-plan-card"
                                style={{
                                    minWidth: "260px",
                                    maxWidth: "320px",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                                    borderRadius: 16,
                                    background: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    position: "relative"
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={`Floor Plan ${idx + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "contain",
                                        borderRadius: "16px 16px 0 0"
                                    }}
                                />
                                <button
                                    className="btn-primary-alternative-custom download-btn mt-3 mb-2"
                                    onClick={() => {
                                        setSelectedImage(img);
                                        setShowModal(true);
                                    }}
                                >
                                    Download Floor Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </section>
    ) : null;
}

export default PropertiesBrocure;
