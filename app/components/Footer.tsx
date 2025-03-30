export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 p-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* RentVAT Section */}
        <div>
          <h2 className="font-bold text-lg text-gray-900">RentVAT</h2>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>Culture</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Our Benefits */}
        <div>
          <h2 className="font-bold text-lg text-gray-900">Our Benefits</h2>
          <ul className="mt-2 space-y-2">
            <li>Sitemap</li>
            <li>B2B - RentVAT for Business</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h2 className="font-bold text-lg text-gray-900">Information</h2>
          <ul className="mt-2 space-y-2">
            <li>Blog</li>
            <li>Support Home</li>
            <li>Documents Required</li>
            <li>Annual Returns</li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h2 className="font-bold text-lg text-gray-900">Policies</h2>
          <ul className="mt-2 space-y-2">
            <li>Shipping Policy</li>
            <li>Cancellation & Return</li>
            <li>Privacy Policy</li>
            <li>CSR Policy</li>
            <li>Rental Terms & Conditions</li>
            <li>Referral Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">Need Help?</p>
        <p className="font-bold text-gray-800">support@rentvat.com</p>
      </div>
    </footer>
  );
}
