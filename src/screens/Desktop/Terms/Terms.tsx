import React, { useEffect } from 'react';

const Terms = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const text = `Effective Date: 9/18/2025

A1c Boost ("we," "our," or "us") values your trust and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use the A1c Boost mobile application, website, and related services (collectively, the "Services").

1. Information We Collect
We may collect the following types of information when you use A1c Boost:
a. Personal Information
Name, email address, phone number, or account login details (when you sign up or contact us).
b. Health & Wellness Information
User-provided health details (such as A1c levels, weight, medications, diet, and activity goals).
Preferences and progress data entered into the app.
c. Device & Usage Information
IP address, device type, operating system, and app usage data.
Log data such as date and time of access, features used, and errors.
d. Third-Party Integrations
If you connect A1c Boost with fitness trackers, health apps, or third-party accounts, we may collect information from those integrations with your permission.

2. How We Use Your Information
We use collected data to:
Provide and improve the A1c Boost app.
Personalize your health and wellness experience.
Track progress and generate insights.
Send reminders, notifications, or updates (with your consent).
Communicate with you about support, updates, and offers.
Ensure security, prevent fraud, and comply with legal requirements.

3. How We Share Your Information
We do not sell your personal or health information. We may share limited data only in these cases:
Service Providers: With trusted partners who help us operate the app (e.g., cloud hosting, analytics, customer support).
Legal Compliance: If required by law or to protect our rights, users, or others.
Consent: With your permission, we may share data with third-party services (like health trackers).

4. Data Retention
We keep your information only as long as necessary to provide the Services, comply with legal obligations, or resolve disputes. You may request deletion of your data at any time.

5. Security
We use industry-standard measures (encryption, secure servers, access controls) to protect your information. However, no system is 100% secure, and we cannot guarantee complete security.

6. Your Rights & Choices
Depending on your location, you may have rights to:
Access, update, or delete your personal data.
Opt-out of certain communications.
Withdraw consent for health data processing.
To exercise these rights, please contact us at [Insert Contact Email].

7. Children's Privacy
A1c Boost is not intended for children under 13 (or the minimum age in your country). We do not knowingly collect data from children. If we learn that we have, we will delete it promptly.

8. Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Effective Date" and, if required, by sending a notice in the app or via email.`;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="max-w-[571px] mx-auto text-center font-bold md:text-5xl text-3xl leading-[62px] bg-gradient-to-r from-[#008ae2] via-[#00b5ca] to-[#f6c643] bg-clip-text text-transparent drop-shadow-md">
        Terms & Conditions
      </h2>
            <div className="prose prose-lg mt-20 max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                    {text}
                </pre>
            </div>
        </div>
    );
};

export default Terms;