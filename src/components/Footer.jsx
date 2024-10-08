

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-10 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        
        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-400">
        © 2024 CUBE1STSTUDIO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
