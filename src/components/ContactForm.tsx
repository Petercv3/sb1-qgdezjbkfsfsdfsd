import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-6 text-white">Send oss en melding</h3>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-6"
      >
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="d4bfa71e-c81b-4135-9c50-7df4e3d6a0ae"
        />

        {/* Honeypot Spam Protection */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Optional: Custom Redirect */}
        {/* <input type="hidden" name="redirect" value="https://pkatrykk/thanks.html" /> */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Melding
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
