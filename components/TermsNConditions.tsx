import React from "react";
import NavigationMenu from "./NavigationMenu";
import ReadyToTalk from "./ReadyToTalk";
import { Row,Col } from "react-bootstrap";
import Link from "next/link";
import './TermsNConditions.css';

function TermsNConditions(){

const [displaySection, setDisplaySection] = React.useState(1);

    return(
        <section>
            <NavigationMenu/>
                <Row className="customContainer mt-5 mb-5">
                    <Col md={4}>
                    <h2 onMouseOver={() => setDisplaySection(1)} className={`${displaySection === 1 ? 'tnc_title_active':'tnc_title_inactive'} tnc_title `}>Terms of Service</h2>
                    <h2 onMouseOver={() => setDisplaySection(2)} className={`${displaySection === 2 ? 'tnc_title_active':'tnc_title_inactive'} tnc_title `}>Privacy Policy</h2>
                    </Col>
                    <Col md={8}>
                        {displaySection === 1 && 
                        <div className="tnc_text">
                            <h4 className="tnc_headings">
                                Effective Date: 12-June-2025
                            </h4>
                            <p className="tnc_text">
                                Welcome to <Link href="/">www.realsta.com</Link> (“Website”), operated by Realsta Infratech Private Limited, a company incorporated under the Companies Act, 2013 with its registered office at 10th Floor, Grand View Tower, Golf Course Ext Rd, Sector 58, Gurugram, Ghata, Haryana 122011 (“Realsta”, “we”, “our”, or “us”).

                            </p>
                            <p className="tnc_text">
                            These Terms of Service (“Terms”) govern your access to and use of this Website. By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the Website.
                            </p>
                            <ol>
                                
                                <h4 className="tnc_headings"><li>
                                    
                                        Eligibility
                                    
                                </li></h4>
                                <p className="tnc_text">You must be at least 18 years of age and capable of entering into a binding contract under applicable law to access or use the Website. By using the Website, you represent and warrant that you meet these eligibility requirements.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                        Use of the Website
                                    
                                </li></h4>
                                <p className="tnc_text">This Website is intended to provide information about our services and to collect contact details for legitimate business communication.<br/>
                                You agree not to:</p>
                                <ul>
                                    <li className="tnc_text">Use the Website in violation of any applicable law.</li>
                                    <li className="tnc_text">Upload false, misleading, or inaccurate contact information.</li>
                                    <li className="tnc_text">Interfere with or compromise the security or integrity of the Website.</li>
                                </ul>
                                <h4 className="tnc_headings"><li>
                                    
                                        Information Collection
                                    
                                </li></h4>
                                <p className="tnc_text">
                                    We do not require you to create an account or log in.
We only collect the following information when voluntarily submitted through our contact forms:
                                </p>
                                <ul>
                                    <li className="tnc_text">Name</li>
                                    <li className="tnc_text">Mobile number</li>
                                    <li className="tnc_text">Address</li>
                                    <li className="tnc_text">Email address</li>
                                </ul>
                                <p className="tnc_text mt-4">This information is used solely to respond to your queries or provide service-related follow-ups, and is processed in accordance with our Privacy Policy.</p>
                             <h4 className="tnc_headings"><li>
                                    
                                        Intellectual Property
                                    
                                </li></h4>
                                <p className="tnc_text">All content on this Website, including but not limited to text, graphics, logos, images, videos, design elements, and software (“Content”), is the property of Realsta or is used under appropriate licenses, and is protected under applicable intellectual property laws.</p>
                                <p className="tnc_text">Certain images, videos, or logos displayed on the Website may be sourced from public or open domains and are used in a manner believed to be consistent with their applicable usage rights. Realsta does not claim ownership over such open-domain materials and gives full credit to their respective creators or platforms wherever applicable.</p>
                                <p className="tnc_text">Except as expressly permitted, you may not reproduce, modify, distribute, display, publish, transmit, or otherwise exploit any Content without our prior written consent or the consent of the rightful owner, as the case may be.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Third-Party Links
                                    
                                </li></h4>    
                                <p className="tnc_text">The Website may include links to third-party websites for informational purposes. Realsta does not endorse or take responsibility for the content or availability of such sites.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Disclaimer of Warranties
                                    
                                </li></h4>    
                                <p className="tnc_text">The Website and its content are provided "as is" and "as available". We make no warranties or guarantees, express or implied, regarding the Website’s performance or the accuracy of its content.</p>
                            <h4  className="tnc_headings"><li>
                                    
                                        Limitation of Liability
                                    
                                </li></h4>    
                            <p className="tnc_text">To the maximum extent permitted by law, Realsta shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Website.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Indemnification
                                    
                                </li></h4> 
                            <p className="tnc_text">You agree to indemnify and hold harmless Realsta, its officers, directors, employees, and agents from any losses, liabilities, or claims arising out of your misuse of the Website or breach of these Terms.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Governing Law and Jurisdiction
                                    
                                </li></h4> 
                            <p className="tnc_text">These Terms shall be governed by and construed in accordance with the laws of India.</p>
                            <p className="tnc_text">Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts at Gurugram, Haryana, India.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Modifications
                                    
                                </li></h4>
                            <p className="tnc_text">We may revise these Terms at any time. Continued use of the Website after changes constitutes acceptance of the updated Terms.</p>
                            <h4 className="tnc_headings"><li>
                                    
                                        Contact Us
                                    
                                </li></h4>
                                <p className="tnc_text"><b>For any questions or concerns:</b></p>
                                <p className="tnc_text"><b>Realsta Infratech Private Limited</b></p>
                                <p className="tnc_text">10th Floor, Grand View Tower, Golf Course Ext Rd, Sector 58, Gurugram, Ghata, Haryana 122011</p>
                                <p className="tnc_text"><b>Email:</b> enquiry@realsta.com</p>
                                <p className="tnc_text"><b>Phone:</b> +91-784-000-1269</p>
                            </ol>
                            </div>}
                        {displaySection === 2 && 
                        <div> <h4 className="tnc_headings">
                                Effective Date: 12-June-2025
                            </h4>
                            <p className="tnc_text">
                                This Privacy Policy explains how Realsta Infratech Private Limited (“Realsta”, “we”, “our”, or “us”) collects, uses, stores, and protects personal information submitted through our website <Link href="/">www.realsta.com</Link>
                            </p>
                            <p className="tnc_text">By using our Website, you consent to the practices described in this Policy and agree to the Terms of Service.</p>
                            <ol>
                                 <h4 className="tnc_headings"><li>
                                    
                                        Information We Collect
                                    
                                </li></h4>
                                <p className="tnc_text">We do not require you to create an account or log in to use our Website.<br/>
                                We collect only the following personal data that you voluntarily provide via contact forms:</p>
                                <ul>
                                    <li className="tnc_text">Name</li>
                                    <li className="tnc_text">Mobile Number</li>
                                    <li className="tnc_text">Email Address</li>
                                    <li className="tnc_text">Address (if entered)</li>
                                </ul>
                                <h4 className="tnc_headings"><li>
                                    
                                        Purpose of Collection
                                    
                                </li></h4>
                                <p className="tnc_text">We collect this information for the limited and specific purposes of:</p>
                                <ul>
                                    <li className="tnc_text">Responding to your inquiries or service requests.</li>
                                    <li className="tnc_text">Communicating with you regarding your interest in our offerings.</li>
                                    <li className="tnc_text">Scheduling meetings, visits, or follow-ups at your request.</li>
                                    <li className="tnc_text">Improving our customer engagement and internal service processes.</li>
                                </ul>
                                <p className="tnc_text mt-4">We do not engage in unsolicited marketing and do not sell your personal data to any third party.</p>
                                 <h4 className="tnc_headings"><li>
                                    
                                       Legal Basis for Processing
                                    
                                </li></h4>
                                <p className="tnc_text">We process your personal data under the following legal grounds:</p>
                                <ol type="a">
                                     <li className="tnc_text">For Visitors from India:</li>
                                     <ul>
                                        <li className="tnc_text">
                                            As per the Digital Personal Data Protection Act, 2023 ("DPDP Act"), we process your data:
                                
                                        </li>
                                        <ul>
                                            <li className="tnc_text">Based on your consent, where applicable.</li>
                                            <li className="tnc_text">In accordance with the principles of purpose limitation, data minimization, and storage limitation.</li>
                                            <li className="tnc_text">With due consideration to your rights as a Data Principal, including the right to access, correction, and grievance redressal.</li>
                                        </ul>
                                     </ul>

                                     <li className="tnc_text mt-5">For Visitors from the European Union (EU) or European Economic Area (EEA):</li>
                                     <ul>
                                        <li className="tnc_text">
                                            We process your data in accordance with the General Data Protection Regulation (GDPR), under lawful bases including:
                                        </li>
                                        <ul>
                                            <li className="tnc_text">Consent (Article 6(1)(a)).</li>
                                            <li className="tnc_text">Legitimate Interests (Article 6(1)(f)) – to operate and improve our business services.</li>
                                            <li className="tnc_text">Compliance with legal obligations (Article 6(1)(c)).</li>
                                        </ul>
                                     </ul>
                                </ol>
                                 <h4 className="tnc_headings"><li>
                                    
                                       Your Rights
                                    
                                </li></h4>
                                <p className="tnc_text">We process your personal data under the following legal grounds:</p>
                                <ol type="a">
                                    <li className="tnc_text">Under the DPDP Act (India), you may:</li>
                                    <ul>
                                        <li className="tnc_text">Request confirmation, access, or correction of your personal data.</li>
                                        <li className="tnc_text">Withdraw your consent at any time.</li>
                                        <li className="tnc_text">File a grievance with our Data Protection Officer (contact below)</li>
                                        <li className="tnc_text">Escalate complaints to the Data Protection Board of India, if unresolved.</li>
                                    </ul>
                                    <li className="tnc_text mt-5">Under the GDPR (EU), you may:</li>
                                    <ul>
                                        <li className="tnc_text">Request access, rectification, or erasure of your personal data.</li>
                                        <li className="tnc_text">Restrict or object to the processing of your data.</li>
                                        <li className="tnc_text">Request data portability.</li>
                                        <li className="tnc_text">Withdraw consent without affecting prior processing.</li>
                                        <li className="tnc_text">Lodge a complaint with your local Data Protection Authority (DPA).</li>
                                    </ul>
                                </ol>
                                <p className="tnc_text mt-4">To exercise your rights, email us at enquiry@realsta.com</p>
                                 <h4 className="tnc_headings"><li>
                                    
                                       Data Sharing
                                    
                                </li></h4>
                                <p className="tnc_text">We do not sell or rent your personal data.</p>
                                <p className="tnc_text">We may share your information:</p>
                                <ul>
                                    <li className="tnc_text">With our employees, contractors, or consultants on a need-to-know basis.</li>
                                    <li className="tnc_text">With third-party service providers (e.g., email/SMS tools) under binding confidentiality agreements.</li>
                                    <li className="tnc_text">If required by law, regulation, or court order.</li>
                                </ul>
                                <h4 className="tnc_headings"><li>
                                    
                                       Data Retention
                                    
                                </li></h4>
                                <p className="tnc_text">We retain your personal data:</p>
                                <ul>
                                    <li className="tnc_text">Only for as long as required to fulfill the purposes mentioned above, or as required by applicable laws.</li>
                                    <li className="tnc_text">In a secure and protected environment.</li>
                                </ul>
                                <h4 className="tnc_headings"><li>
                                    
                                       Data Security
                                    
                                </li></h4>
                                <p className="tnc_text">We implement reasonable technical and organizational safeguards to protect your data from unauthorized access, loss, misuse, or disclosure. However, no transmission over the internet can be guaranteed 100% secure.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                       Cross-Border Data Transfers
                                    
                                </li></h4>
                                <p className="tnc_text">If you are located outside India (including the EU/EEA), please note that your data may be transferred to and processed in India, where our servers and personnel are located. Such transfers will be conducted in accordance with applicable data protection laws and contractual safeguards.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                       Cookies and Tracking
                                    
                                </li></h4>
                                <p className="tnc_text">We currently do not use cookies, trackers, or analytics tools that capture personally identifiable information. If this changes in the future, this policy will be updated and consent will be obtained as required.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                       Third-Party Links
                                    
                                </li></h4>
                                <p className="tnc_text">Our Website may include links to third-party websites. We are not responsible for their content or data practices. Please review their respective privacy policies before providing them with your information.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                       Children’s Privacy
                                    
                                </li></h4>
                                <p className="tnc_text">Our Website is not intended for use by individuals under the age of 18. We do not knowingly collect data from children.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                       Changes to this Policy
                                    
                                </li></h4>
                                <p className="tnc_text">We may revise this Privacy Policy periodically. The updated version will be posted on this page with a revised effective date. Continued use of the Website constitutes acceptance of the changes.</p>
                                <h4 className="tnc_headings"><li>
                                    
                                        Contact Us
                                    
                                </li></h4>
                                <p className="tnc_text"><b>For any questions or concerns:</b></p>
                                <p className="tnc_text"><b>Realsta Infratech Private Limited</b></p>
                                <p className="tnc_text">10th Floor, Grand View Tower, Golf Course Ext Rd, Sector 58, Gurugram, Ghata, Haryana 122011</p>
                                <p className="tnc_text"><b>Email:</b> enquiry@realsta.com</p>
                                <p className="tnc_text"><b>Phone:</b> +91-784-000-1269</p>
                            </ol>
                            </div>}
                    </Col>
                </Row>
            <ReadyToTalk/>
        </section>
    )
}

export default TermsNConditions