export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer sections - 2 columns on phone */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {/* RentVAT Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-lg text-gray-900 mb-2">RentVAT</h2>
            <ul className="space-y-1">
              {["About Us", "Culture", "Investors", "Careers", "Contact"].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer text-sm">
                  <a href="#" className="block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Benefits */}
          <div className="col-span-1">
            <h2 className="font-bold text-lg text-gray-900 mb-2">Benefits</h2>
            <ul className="space-y-1">
              {["Sitemap", "B2B - RentVAT for Business"].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer text-sm">
                  <a href="#" className="block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-lg text-gray-900 mb-2">Information</h2>
            <ul className="space-y-1">
              {["Blog", "Support Home", "Documents Required", "Annual Returns"].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer text-sm">
                  <a href="#" className="block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-lg text-gray-900 mb-2">Policies</h2>
            <ul className="space-y-1">
              {[
                "Shipping Policy",
                "Cancellation & Return",
                "Privacy Policy",
                "CSR Policy",
                "Rental Terms",
                "Referral Terms"
              ].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer text-sm">
                  <a href="#" className="block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-600">Need Help?</p>
              <a href="mailto:support@rentvat.com" className="font-bold text-gray-800 hover:text-blue-600 transition-colors">
                support@rentvat.com
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <span className="text-xs">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} RentVAT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}