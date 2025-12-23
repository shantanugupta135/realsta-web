// src/components/SharedModal.tsx
"use client";
import { Modal } from 'react-bootstrap';
import './FormModal.css';
import { useState, useEffect } from 'react';
import { ModalFormData, submitPopupForm } from '../services/formService';

type FormModalProps = {
    show: boolean;
    onClose: () => void;
};

const FormModal: React.FC<FormModalProps> = ({ show, onClose }) => {
    const [formData, setFormData] = useState<ModalFormData>({
        lookingFor: "",
        salutation: "Mr.",
        firstName: "",
        lastName: "",
        emailId: "",
        phone: "",
        organization: "",
        message: "",
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
            const message = await submitPopupForm(formData);
            alert(
              "Thank you for reaching out to us!\n\nYour form has been successfully submitted. Our team will review your details and get back to you shortly. In the meantime, feel free to explore our resources or contact us directly if you need immediate assistance."
            );
            setFormData({
                lookingFor: "",
                salutation: "Mr.",
                firstName: "",
                lastName: "",
                emailId: "",
                phone: "",
                organization: "",
                message: "",
            });
            setTouched({});
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    const requiredFields = [
        "lookingFor",
        "salutation",
        "firstName",
        "lastName",
        "phone",
        "message"
    ];

    // Email validation function
    const isEmailValid = (email: string) => {
        if (!email) return true; // If empty, it's valid (since not required)
        // Simple email regex
        return /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);
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
                lookingFor: "",
                salutation: "Mr.",
                firstName: "",
                lastName: "",
                emailId: "",
                phone: "",
                organization: "",
                message: "",
            });
            setTouched({});
        }
    }, [show]);

    return (
        <Modal className='modal-wrapper' show={show} onHide={onClose} centered size="xl">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="row mb-5">
                    <div className="col-6">
                        <div className='form-heading mt-2'>Get <span className='form-highlight'>Started</span></div>
                        <div className='form-subheading mt-4'>Looking for asset management, leasing solutions, or investment advice? Explore our services today.</div>
                    </div>
                    <div className="col-6">
                        <div className='d-flex justify-content-end mt-2'>
                            <img loading="lazy" src='/assets/brand-logo/logo-black.webp' alt='logo' />
                        </div>
                    </div>
                </div>
                <form className='form-popup d-flex flex-column mt-4'>
                    <div className="row row d-flex align-items-end">
                        <div className="col-6">
                            <select
                                className={`form-select bg-transparent border-0 border-bottom text-white${isFieldInvalid('lookingFor') ? ' border-danger' : ''}`}
                                name="lookingFor"
                                onChange={handleChange}
                                value={formData.lookingFor}
                                onBlur={() => setTouched(prev => ({ ...prev, lookingFor: true }))}
                            >
                                <option value="">What are you looking for?</option>
                                <option value="consultation">Office for lease</option>
                                <option value="purchase">Investment advice</option>
                                <option value="other">Manage my assets</option>
                                <option value="other">Managed smart office</option>
                                <option value="other">Design my office</option>
                            </select>
                        </div>
                        <div className="col-6">
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
                    <div className="row d-flex align-items-end">
                        <div className="col-1">
                            <select
                                className={`form-select bg-transparent border-0 border-bottom text-white${isFieldInvalid('salutation') ? ' border-danger' : ''}`}
                                name="salutation"
                                onChange={handleChange}
                                value={formData.salutation}
                                onBlur={() => setTouched(prev => ({ ...prev, salutation: true }))}
                            >
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Miss</option>
                                <option value="Ms.">Dr.</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <input
                                type="text"
                                className={`form-control bg-transparent border-0 border-bottom text-black${isFieldInvalid('firstName') ? ' border-danger' : ''}`}
                                placeholder="First Name *"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                className={`form-control bg-transparent border-0 border-bottom text-back${isFieldInvalid('lastName') ? ' border-danger' : ''}`}
                                placeholder="Last Name *"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="email"
                                className={`form-control bg-transparent border-0 border-bottom text-black${isFieldInvalid('emailId') ? ' border-danger' : ''}`}
                                placeholder="Your Email"
                                name="emailId"
                                value={formData.emailId}
                                onChange={handleChange}
                                onBlur={() => setTouched(prev => ({ ...prev, emailId: true }))}
                                pattern="^[\w\.-]+@[\w\.-]+\.\w{2,}$"
                                autoComplete="email"
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control bg-transparent border-0 border-bottom text-black"
                                placeholder="Organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <textarea
                        className={`form-control bg-transparent border-0 border-bottom text-black${isFieldInvalid('message') ? ' border-danger' : ''}`}
                        placeholder="Leave a message *"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                    />
                    <button
                        className='btn-secondary-alternative-custom'
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;