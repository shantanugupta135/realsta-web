// src/components/SharedModal.tsx
"use client";
import { Modal } from 'react-bootstrap';
import './FormModal.css';
import { useState, useEffect } from 'react';
import { submitResourcesPopup, ModalResourcesFormData } from '../services/formService';

type FormModalProps = {
    show: boolean;
    onClose: () => void;
    onDownload?: () => void;
};

const ResourcesModal: React.FC<FormModalProps> = ({ show, onClose, onDownload }) => {
    const [formData, setFormData] = useState<ModalResourcesFormData>({
        emailId: "",
        phone: "",
    });

    // Track touched fields
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
        setTouched(prev => ({
            ...prev,
            [name]: true,
        }));
    };

    const handleSubmit = async () => {
        if (!isFormValid) {
            // Mark all required fields as touched to show red border for invalid/empty fields
            const touchedFields: { [key: string]: boolean } = {};
            requiredFields.forEach(field => {
                touchedFields[field] = true;
            });
            setTouched(prev => ({
                ...prev,
                ...touchedFields,
            }));
            return;
        }
        try {
            await submitResourcesPopup(formData);
            setFormData({
                emailId: "",
                phone: ""
            });
            setTouched({});
            if (onDownload) onDownload();
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    const requiredFields = [
        "emailId",
        "phone"
    ];

    // Email validation function
    const isEmailValid = (email: string) => {
        if (!email) return true; // If empty, it's valid (since not required)
        // Simple email regex
        return /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
    };

    const isFormValid =
        requiredFields.every(field => formData[field as keyof typeof formData]?.trim()) &&
        isEmailValid(formData.emailId) &&
        formData.phone.length === 10;

    // Validation helpers
    const isFieldInvalid = (field: string) => {
        if (!touched[field]) return false; // Only show red border if touched

        if (field === "emailId") {
            return formData.emailId.trim() !== "" && !isEmailValid(formData.emailId);
        }
        if (field === "phone") {
            return formData.phone.trim() === "" || formData.phone.length !== 10;
        }
        // For other fields, show red if empty
        return formData[field as keyof typeof formData]?.trim() === "";
    };

    // Reset form when modal is closed
    useEffect(() => {
        if (!show) {
            setFormData({
                emailId: "",
                phone: ""
            });
            setTouched({});
        }
    }, [show]);

    return (
        <Modal className='modal-wrapper' show={show} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <div className='d-flex justify-content-start mt-2'>
                            <img loading="lazy" src='/assets/brand-logo/logo-black.webp' alt='logo' />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='form-heading mt-5'>Get in <span className='form-highlight'>touch</span></div>
                        <div className='form-subheading mt-4'>Need to ask us a question, Access our brand resources, or just want to learn more about our company culture?</div>
                    </div>
                </div>
                <form className='form-popup d-flex flex-column mt-4'>
                    <div className="row row d-flex align-items-end gap-4">
                        <div className="col-12">
                            <input
                                type="email"
                                className={`form-control bg-transparent border-0 border-bottom text-black${isFieldInvalid('emailId') ? ' border-danger' : ''}`}
                                placeholder="Your Email *"
                                name="emailId"
                                value={formData.emailId}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, emailId: true }))}
                                pattern="^[\w\.-]+@[\w\.-]+\.\w{2,}$"
                                autoComplete="email"
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="tel"
                                className={`form-control bg-transparent border-0 border-bottom text-black${isFieldInvalid('phone') ? ' border-danger' : ''}`}
                                placeholder="Phone Number *"
                                name="phone"
                                value={formData.phone}
                                onChange={e => {
                                    // Only allow digits
                                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                    setFormData(prev => ({
                                        ...prev,
                                        phone: value,
                                    }));
                                }}
                                onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                                minLength={10}
                                maxLength={10}
                                pattern="\d{10}"
                            />
                        </div>
                    </div>
                    <button
                        className='btn-secondary-alternative-custom'
                        type="button"
                        onClick={handleSubmit}
                    >
                        Download Now<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};

export default ResourcesModal;