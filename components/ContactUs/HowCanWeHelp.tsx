"use client";
import React, { useState, useRef, useEffect } from 'react'
import './HowCanWeHelp.css'
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { submitResumeWithForm, ResumeFormData, EnquiryFormData, submitEnquiry } from '../../services/formService';

const HowCanWeHelp = () => {
    const pathname = usePathname();
    const careerSectionRef = useRef<HTMLDivElement>(null);
    const [careerFormData, setCareerFormData] = useState<any>({
        salutation: "Mr.",
        firstName: "",
        lastName: "",
        emailId: "",
        phone: "",
        city: "",
        message: "",
    });

    const [enquiryFormData, setEnquiryFormData] = useState<any>({
        lookingFor: "OfficeForLease",
        salutation: "Mr.",
        firstName: "",
        lastName: "",
        emailId: "",
        phone: "",
        city: "",
        organization: "",
        message: "",
    });

    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    // const [isCareerOpen, setIsCareerOpen] = useState(!!location.state?.openCareer);
    const searchParams = useSearchParams();
    const openCareer = searchParams.get('openCareer');
    const [isCareerOpen, setIsCareerOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [resumeError, setResumeError] = useState<string>("");

    const careerRequiredFields = [
        "salutation",
        "firstName",
        "lastName",
        "emailId",
        "phone",
        "city"
    ];

    const enquiryRequiredFields = [
        "salutation",
        "firstName",
        "lastName",
        "phone",
        "emailId",
    ];

    // Separate handleChange for career and enquiry forms
    const handleCareerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCareerFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
        setTouched(prev => ({
            ...prev,
            [name]: true,
        }));
    };

    const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEnquiryFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
        setTouched(prev => ({
            ...prev,
            [name]: true,
        }));
    };

    const isFieldInvalid = (field: string) => {
        if (!touched[field]) return false; // Only show red border if touched

        if (field === "emailId") {
            return careerFormData.emailId.trim() !== "" && !isEmailValid(careerFormData.emailId);
        }
        if (field === "phone") {
            return careerFormData.phone.trim() === "" || careerFormData.phone.length !== 10;
        }
        // For other fields, show red if empty
        return careerFormData[field as keyof typeof careerFormData]?.trim() === "";
    };

    const isEmailValid = (email: string) => {
        if (!email) return true; // If empty, it's valid (since not required)
        // Simple email regex
        return /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);
    };

    // Separate validation for career and enquiry forms
    const isCareerFormValid =
        careerRequiredFields.every(field => careerFormData[field as keyof typeof careerFormData]?.trim()) &&
        isEmailValid(careerFormData.emailId) &&
        careerFormData.phone.length === 10;

    const isEnquiryFormValid =
        enquiryRequiredFields.every(field => enquiryFormData[field as keyof typeof enquiryFormData]?.trim()) &&
        isEmailValid(enquiryFormData.emailId) &&
        enquiryFormData.phone.length === 10;

    const handleCareerSubmit = async () => {
        if (!isCareerFormValid) {
            // Mark all required fields as touched to show red border for invalid/empty fields
            const touchedFields: { [key: string]: boolean } = {};
            careerRequiredFields.forEach(field => {
                touchedFields[field] = true;
            });
            setTouched(prev => ({
                ...prev,
                ...touchedFields,
            }));
            return;
        }
        try {
            const resumeData: ResumeFormData = {
                salutation: careerFormData.salutation,
                firstName: careerFormData.firstName,
                lastName: careerFormData.lastName,
                email: careerFormData.emailId, // map emailId to email for backend
                phone: careerFormData.phone,
                city: careerFormData.city,
                message: careerFormData.message,
                ...(resumeFile ? { resume: resumeFile } : {}) // Only include resume if present
            };
            const message = await submitResumeWithForm(resumeData);
            alert(message);
            setCareerFormData({
                salutation: "Mr.",
                firstName: "",
                lastName: "",
                emailId: "",
                phone: "",
                city: "",
                message: "",
            });
            setResumeFile(null);
            setResumeError("");
            setTouched({});
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    const handleEnquirySubmit = async () => {
        if (!isEnquiryFormValid) {
            // Mark all required fields as touched to show red border for invalid/empty fields
            const touchedFields: { [key: string]: boolean } = {};
            enquiryRequiredFields.forEach(field => {
                touchedFields[field] = true;
            });
            setTouched(prev => ({
                ...prev,
                ...touchedFields,
            }));
            return;
        }
        try {
            const resumeData: EnquiryFormData = {
                lookingFor: enquiryFormData.lookingFor,
                salutation: enquiryFormData.salutation,
                firstName: enquiryFormData.firstName,
                lastName: enquiryFormData.lastName,
                email: enquiryFormData.emailId,
                phone: enquiryFormData.phone,
                city: enquiryFormData.city,
                message: enquiryFormData.message,
            };
            const message = await submitEnquiry(resumeData);
            alert(message);
            setEnquiryFormData({
                lookingFor: "Office for lease",
                salutation: "Mr.",
                firstName: "",
                lastName: "",
                emailId: "",
                phone: "",
                city: "",
                organization: "",
                message: "",
            });
            setTouched({});
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    // Scroll to career section if openCareer is set
    // useEffect(() => {
    //     if (location.state?.openCareer && careerSectionRef.current) {
    //         careerSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // }, [location.state]);
    useEffect(() => {
        setIsCareerOpen(openCareer === 'true');
    }, [openCareer]);

return (
    <>
        <section className='help-section'>
            <div className="customContainer">
                <div className="help-heading">How can we <span className='help-heading-bold'>help you?</span></div>
            </div>
        </section>
        <section>
            <div className="customContainer">
                <div ref={careerSectionRef} className="accordianWrap help-acc-wrap">
                    <div className="accordianHeading d-flex align-items-center justify-content-between">
                        {/* <div className={isCareerOpen ? 'accordianHeadingExpanded' : ''}></div> */}
                        <button className="expandbutton help-accordian" onClick={() => setIsCareerOpen(!isCareerOpen)}>
                            <div> <span className='help-heading'>I want to work </span><span className='help-heading-bold'>at Realsta</span></div>
                            <i className={`fa-solid ${isCareerOpen ? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                        </button>
                    </div>
                    <hr className="faq-divider" />
                    {isCareerOpen && (
                        <div className={`mt-4 accordianDescription ${isCareerOpen ? 'open' : ''}`}>
                            <form name="career-form" className='form-help d-flex flex-column mt-4 gap-4'>
                                <div className="row d-flex align-items-end">
                                    <div className="col-1">
                                        <select
                                            className={`form-control border-0 border-bottom${isFieldInvalid('salutation') ? ' border-danger' : ''}`}
                                            name="salutation"
                                            onChange={handleCareerChange}
                                            value={careerFormData.salutation}
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
                                            className={`form-control border-0 border-bottom${isFieldInvalid('firstName') ? ' border-danger' : ''}`}
                                            placeholder="First Name *"
                                            name="firstName"
                                            value={careerFormData.firstName}
                                            onChange={handleCareerChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className={`form-control border-0 border-bottom${isFieldInvalid('lastName') ? ' border-danger' : ''}`}
                                            placeholder="Last Name *"
                                            name="lastName"
                                            value={careerFormData.lastName}
                                            onChange={handleCareerChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                            type="email"
                                            className={`form-control border-0 border-bottom${isFieldInvalid('emailId') ? ' border-danger' : ''}`}
                                            placeholder="Email *"
                                            name="emailId"
                                            value={careerFormData.emailId}
                                            onChange={handleCareerChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, emailId: true }))}
                                            pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                                            autoComplete="email"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="Phone Number *"
                                            name="phone"
                                            value={careerFormData.phone}
                                            onChange={handleCareerChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="City *"
                                            name="city"
                                            value={careerFormData.city}
                                            onChange={handleCareerChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea
                                            className={`form-control border-0 border-bottom${isFieldInvalid('message') ? ' border-danger' : ''}`}
                                            placeholder="Leave a message"
                                            rows={3}
                                            name="message"
                                            value={careerFormData.message}
                                            onChange={handleCareerChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <button
                                            className="btn-secondary-custom"
                                            type="button"
                                            onClick={() => document.getElementById('resume-upload')?.click()}
                                        >
                                            Upload Resume<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                                        </button>
                                        <input
                                            id="resume-upload"
                                            type="file"
                                            accept="application/pdf"
                                            style={{ display: 'none' }}
                                            onChange={e => {
                                                setResumeError("");
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    if (file.type !== 'application/pdf') {
                                                        setResumeError('Only PDF files are allowed.');
                                                        setResumeFile(null);
                                                        return;
                                                    }
                                                    if (file.size > 5 * 1024 * 1024) {
                                                        setResumeError('File size must be less than 5 MB.');
                                                        setResumeFile(null);
                                                        return;
                                                    }
                                                    setResumeFile(file);
                                                }
                                            }}
                                        />
                                        {resumeError && <div style={{ color: 'red', fontSize: '0.9rem' }}>{resumeError}</div>}
                                        {resumeFile && (
                                            <div style={{ color: 'green', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                Selected: {resumeFile.name}
                                                <button
                                                    type="button"
                                                    style={{ background: 'none', border: 'none', color: 'red', fontSize: '1.1rem', cursor: 'pointer', marginLeft: '4px' }}
                                                    aria-label="Remove file"
                                                    onClick={() => setResumeFile(null)}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-2">
                                        <button
                                            className='btn-secondary-custom'
                                            type="button"
                                            onClick={handleCareerSubmit}
                                        >
                                            Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="accordianWrap help-acc-wrap mt-5">
                    <div className="accordianHeading d-flex align-items-center justify-content-between">
                        {/* <div className={isEnquiryOpen ? 'accordianHeadingExpanded' : ''}><span className='help-heading'>I have </span><span className='help-heading-bold'>an Enquiry</span></div> */}
                        <button className="expandbutton help-accordian" onClick={() => setIsEnquiryOpen(!isEnquiryOpen)}>
                            <div><span className='help-heading'>I have </span><span className='help-heading-bold'>an Enquiry</span></div>
                            <i className={`fa-solid ${isEnquiryOpen ? 'fa-minus' : 'fa-plus'} plusIcon`}></i>
                        </button>

                    </div>
                    <hr className="faq-divider" />
                    {isEnquiryOpen && (
                        <div className={`mt-4 accordianDescription ${isEnquiryOpen ? 'open' : ''}`}>
                            <form name="enquiry-form" className='form-help d-flex flex-column mt-4 gap-4'>
                                <div className="row">
                                    <div className="col-6">
                                        <select
                                            className={`form-control border-0 border-bottom${isFieldInvalid('salutation') ? ' border-danger' : ''}`}
                                            name="lookingFor"
                                            onChange={handleEnquiryChange}
                                            value={enquiryFormData.lookingFor}
                                            onBlur={() => setTouched(prev => ({ ...prev, lookingFor: true }))}
                                        >
                                            <option value="OfficeForLease">Office for lease</option>
                                            <option value="InvestmentAdvice">Investment advice</option>
                                            <option value="ManageMyAssets">Manage my assets</option>
                                            <option value="ManagedSmartOffice">Managed smart office</option>
                                            <option value="DesignMyOffice">Design my office</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-end">
                                    <div className="col-1">
                                        <select
                                            className={`form-control border-0 border-bottom${isFieldInvalid('salutation') ? ' border-danger' : ''}`}
                                            name="salutation"
                                            onChange={handleEnquiryChange}
                                            value={enquiryFormData.salutation}
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
                                            className={`form-control border-0 border-bottom${isFieldInvalid('firstName') ? ' border-danger' : ''}`}
                                            placeholder="First Name *"
                                            name="firstName"
                                            value={enquiryFormData.firstName}
                                            onChange={handleEnquiryChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className={`form-control border-0 border-bottom${isFieldInvalid('lastName') ? ' border-danger' : ''}`}
                                            placeholder="Last Name *"
                                            name="lastName"
                                            value={enquiryFormData.lastName}
                                            onChange={handleEnquiryChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                            type="email"
                                            className={`form-control border-0 border-bottom${isFieldInvalid('emailId') ? ' border-danger' : ''}`}
                                            placeholder="Email *"
                                            name="emailId"
                                            value={enquiryFormData.emailId}
                                            onChange={handleEnquiryChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, emailId: true }))}
                                            pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                                            autoComplete="email"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="Phone Number *"
                                            name="phone"
                                            value={enquiryFormData.phone}
                                            onChange={handleEnquiryChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="City"
                                            name="city"
                                            value={enquiryFormData.city}
                                            onChange={handleEnquiryChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="Your Organization"
                                            name="organization"
                                            value={enquiryFormData.organization}
                                            onChange={handleEnquiryChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea
                                            className={`form-control border-0 border-bottom${isFieldInvalid('message') ? ' border-danger' : ''}`}
                                            placeholder="Leave a message"
                                            rows={3}
                                            name="message"
                                            value={enquiryFormData.message}
                                            onChange={handleEnquiryChange}
                                            onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <button
                                            className='btn-secondary-custom'
                                            type="button"
                                            onClick={handleEnquirySubmit}
                                        >
                                            Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
)
}

export default HowCanWeHelp
