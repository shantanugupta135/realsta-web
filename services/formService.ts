export interface FormData {
  firstName: string;
  lastName: string;
  emailId: string;
  phone: string;
  dropdown: string;
  message: string;
}

export interface ModalFormData {
  lookingFor: string;
  salutation: string;
  firstName: string;
  lastName: string;
  emailId: string;
  phone: string;
  organization: string;
  message: string;
}

export interface LandingPageData{
  contactTiming:string,
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
}
export interface ModalResourcesFormData {
  emailId: string;
  phone: string;
}

export interface ResumeFormData {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
  resume?: File; // Make resume optional
}

export interface EnquiryFormData {
  lookingFor: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city?: string;
  organization?: string;
  message?: string;
}

const API_URL = "https://realsta.com/";

export async function submitForm(data: FormData): Promise<string> {
  try {
    const response = await fetch(API_URL + 'get-in-touch-homepage.php', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error ?? "Unknown error occurred");
    }

    return result.message;
  } catch (error: any) {
    console.error("Form submission error:", error.message);
    throw error;
  }
};

export const submitLandingForm = async (
  formData: LandingPageData
): Promise<string> => {
  try {
    const response = await fetch(API_URL + "landingPageForm.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Try parsing JSON safely
    let result: any = {};
    try {
      result = await response.json();
    } catch {
      throw new Error("Invalid server response. Expected JSON but got nothing.");
    }

    if (!response.ok) {
      throw new Error(
        result.error ??
          "Sorry we couldn’t complete your request.\nPlease check your connection or try again."
      );
    }

    return result.message ?? "Form submitted successfully";
  } catch (error: any) {
    throw new Error(error.message ?? "Network error");
  }
};

export const submitPopupForm = async (formData: ModalFormData): Promise<string> => {
  try {
    const response = await fetch(API_URL + 'enquiry-popup.php', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error ?? "Sorry we couldn’t complete your request.\nPlease check your connection or try again.");
    }
    
    return result.message;
  } catch (error: any) {
    throw new Error(error.message ?? "Network error");
  }
};

export async function submitResourcesPopup(data: { emailId: string; phone: string }): Promise<string> {
  try {
    const response = await fetch(API_URL + 'download-resource.php', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error ?? "Sorry we couldn’t complete your request.\nPlease check your connection or try again.");
    }

    return result.message;
  } catch (error: any) {
    throw new Error(error.message ?? "Network error");
  }
};

export async function submitResumeWithForm(data: ResumeFormData): Promise<string> {
  // Only the following fields are mandatory: salutation, firstName, lastName, email, phone, city
  const requiredFields = [
    'salutation',
    'firstName',
    'lastName',
    'email',
    'phone',
    'city',
  ];
  for (const field of requiredFields) {
    if (!data[field as keyof ResumeFormData]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  const formData = new FormData();
  formData.append('salutation', data.salutation);
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('city', data.city);
  if (data.message) formData.append('message', data.message);
  if (data.resume) formData.append('resume', data.resume); // Only append if present

  const response = await fetch(API_URL + 'submit-resume.php', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error ?? 'Unknown error occurred');
  }
  return result.message ?? 'Resume submitted successfully';
}

export async function submitEnquiry(data: EnquiryFormData): Promise<string> {
  // Only the following fields are mandatory: salutation, firstName, lastName, email, phone, city
  const requiredFields = [
    'lookingFor',
    'salutation',
    'firstName',
    'lastName',
    'email',
    'phone',
  ];
  for (const field of requiredFields) {
    if (!data[field as keyof EnquiryFormData]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  const formData = new FormData();
  formData.append('lookingFor', data.lookingFor);
  formData.append('salutation', data.salutation);
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  if(data.city) formData.append('city', data.city);
  if(data.organization) formData.append('organization', data.organization);
  if (data.message) formData.append('message', data.message);

  const response = await fetch(API_URL + 'submit-contact-enquiry.php', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error ?? 'Unknown error occurred');
  }
  return result.message ?? 'Resume submitted successfully';
}
