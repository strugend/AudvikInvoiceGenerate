import React from 'react';

const LegalPage = () => {
  return (
    <div className='m-1 p-3'>
      <h5>Privacy Policy</h5>
      <p>
        At Audvik, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our application. By using Audvik, you consent to the practices described in this policy.
      </p>
      <ol>
          <li>Information We Collect:
              <ul>
                  <li>Personal Information: When you create an account, we may collect personal information such as your name, email address, phone number, and address. This information is necessary for order management and communication purposes.</li>
                  <li>Order Information: We collect information related to your orders, including order details, payment information, and delivery preferences.</li>
                  <li>Usage Information: We may collect non-personal information about how you interact with our application, such as your device type, browser information, and IP address. This helps us analyze and improve our services.</li>
              </ul>
          </li>
          <li>Use of Information:
              <ul>
                  <li>We use the information we collect to process and fulfill your orders, communicate with you about your orders, and provide customer support.</li>
                  <li>Your personal information may be used for authentication, account management, and security purposes.</li>
                  <li>We may use aggregated and anonymized data for statistical analysis and improving our services.</li>
              </ul>
          </li>
          <li>Data Security:
              <ul>
                  <li>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.</li>
                  <li>However, please note that no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</li>
              </ul>
          </li>
          <li>Third-Party Services:
              <ul>
                  <li>We may use third-party services, such as payment processors or delivery partners, to facilitate order management. These services have their own privacy policies and terms of use.</li>
              </ul>
          </li>
      </ol>

      <h5>Terms and Conditions</h5>
      <p>
        By using the Strugend application, you agree to the following terms and conditions:
      </p>
        <ol>
            <li>Account Creation:
                <ul>
                    <li>You must create an account to use the Audvik application. You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You are solely responsible for all activities that occur under your account.</li>
                </ul>
            </li>
            <li>Order Management:
                <ul>
                    <li>Audvik provides features to manage orders, including order placement, tracking, and delivery. You are responsible for providing accurate and up-to-date information for successful order management.</li>
                    <li>Any changes or modifications to orders should be communicated promptly to ensure accurate processing.</li>
                </ul>
            </li>
            <li>Payment:
                <ul>
                    <li>Payments for orders placed through the Audvik application must be made using the available payment methods.</li>
                    <li>You agree to provide accurate and valid payment information. Audvik is not responsible for any payment failures or issues arising from incorrect payment details provided by you.</li>
                </ul>
            </li>
            <li>Delivery:
                <ul>
                    <li>Audvik facilitates the delivery of orders through third-party delivery partners. Delivery timelines and availability may vary depending on your location and the delivery partner's services.</li>
                    <li>Audvik is not responsible for any delays, damages, or issues related to the delivery of orders. Any concerns or complaints regarding delivery should be addressed directly with the delivery partner.</li>
                </ul>
            </li>
            <li>Intellectual Property:
                <ul>
                    <li>The Audvik application, including its content and design, is protected by intellectual property laws. You may not modify, reproduce, or distribute any part of the application without explicit permission.</li>
                </ul>
            </li>
            <li>Modifications:
                <ul>
                    <li>Audvik reserves the right to modify or update these terms and conditions and the privacy policy at any time. You will be notified of any significant changes.</li>
                    <li>Continued use of the Audvik application after modifications constitutes acceptance of the updated terms and conditions.</li>
                </ul>
            </li>
        </ol>
        <p>Please read these terms and conditions and the privacy policy carefully. If you do not agree with any part of them, please refrain from using the Audvik application.</p>
    </div>
  );
};

export default LegalPage;
