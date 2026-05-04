import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fff7f7] px-6 md:px-16 py-10">
    
      <h1 className="text-3xl md:text-4xl font-bold text-[#5C0B15] mb-4">
        Refund Policy
      </h1>

      <p className="text-gray-500 mb-8">
        Effective Date: 08/03/2026
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-6 text-gray-700 leading-relaxed">

        <p>
          At <span className="font-semibold">Tradition by Avisha</span>, we are committed to delivering high-quality artificial and handmade jewellery. Due to the delicate and hygiene-sensitive nature of our products, we follow a strict refund and exchange policy.
        </p>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            1. General Policy
          </h2>
          <p>We do NOT offer refunds on purchased products.</p>

          <p className="mt-2 font-medium">Exchange is allowed only if:</p>
          <ul className="list-disc ml-6">
            <li>Product received is damaged during transit</li>
            <li>Wrong product delivered</li>
          </ul>

          <p className="mt-2 font-medium">We do NOT accept returns for:</p>
          <ul className="list-disc ml-6">
            <li>Change of mind</li>
            <li>Personal preference issues</li>
            <li>Minor color differences</li>
            <li>Handmade variations</li>
            <li>Wrong size ordered</li>
            <li>Courier delays</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            2. 7-Day Exchange Window
          </h2>
          <p>
            Customers must raise a complaint within <b>7 days</b> of delivery.
          </p>
          <p className="mt-2">
            Email: <b>care@traditionbyavisha.com</b>
          </p>

          <p className="mt-2 font-medium">Required:</p>
          <ul className="list-disc ml-6">
            <li>Order number</li>
            <li>Clear product photos</li>
            <li>Unboxing video (mandatory)</li>
          </ul>

          <p className="text-red-500 mt-2">
            Claims without unboxing video will not be accepted.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            3. Conditions for Exchange
          </h2>
          <ul className="list-disc ml-6">
            <li>Product must be unused</li>
            <li>Original packaging required</li>
            <li>Tags & accessories intact</li>
            <li>No perfume, sweat, or damage</li>
          </ul>

          <p className="mt-2 font-medium">If approved:</p>
          <ul className="list-disc ml-6">
            <li>Replacement shipment OR</li>
            <li>Store credit (if unavailable)</li>
          </ul>

          <p className="mt-2 text-red-500">
            Monetary refunds are NOT issued except legally required cases.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            4. Customised Jewellery
          </h2>
          <ul className="list-disc ml-6">
            <li>100% prepaid</li>
            <li>Non-cancellable</li>
            <li>Non-returnable</li>
            <li>Non-refundable</li>
          </ul>

          <p className="mt-2">
            Exchange allowed only if damaged + valid proof within 7 days.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            5. Refund (Exceptional Cases)
          </h2>
          <ul className="list-disc ml-6">
            <li>Replacement unavailable</li>
            <li>Order cancelled within allowed time</li>
            <li>Payment deducted but order not confirmed</li>
          </ul>

          <p className="mt-2">
            Refunds processed within <b>7–10 business days</b>.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            6. Order Cancellation
          </h2>
          <p>Orders can be cancelled within <b>6 hours</b>.</p>

          <p className="mt-2 text-red-500">
            After processing/dispatch → No cancellation or refund.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            7. Fraud Prevention
          </h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc ml-6">
            <li>Deny suspicious claims</li>
            <li>Reject invalid proof</li>
            <li>Take legal action if required</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            8. Shipping Charges
          </h2>
          <p>Shipping charges are non-refundable.</p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            9. Business Information
          </h2>
          <p>
            Tradition by Avisha, Ahmedabad, Gujarat, India
          </p>
          <p>Email: care@traditionbyavisha.com</p>
        </div>

        <div>
          <h2 className="font-semibold text-[#5C0B15] text-lg mb-2">
            10. Policy Updates
          </h2>
          <p>
            We may update this policy anytime. Changes apply immediately after posting.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;