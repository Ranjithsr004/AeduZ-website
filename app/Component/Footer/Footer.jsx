import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container  mx-4 mr-6  md:mx-4 lg:mx-auto xl:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div >
              <img className="h-12 w-auto mb-4" src="https://media.licdn.com/dms/image/D560BAQH6XGSlZuae0Q/company-logo_200_200/0/1708798945374/aeduz_logo?e=1718236800&v=beta&t=mkoKHLYtHQYhXhlQxDVIc7mpwFApukMRJ-ehHiJK9Ms"/>
              <p className="mb-4">
                AeduZ is your premier destination for personalized mentorship. Through our innovative platform & network of experienced mentors, we empower the students, filled them with confidence & resilience to overcome challenges & achieve their educational goals.
              </p>
            </div>
            <div className="lg:px-12 ">
              <h2 className="text-lg font-semibold mb-4">Important Links</h2>
              <ul>
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Institutions</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Social Media Handles</h2>
              <div className="flex items-center">
              <a href="#" className="mr-4">
                <FaFacebook size="2em" />
              </a>
              <a href="#" className="mr-4">
                <FaInstagram size="2em" />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter size="2em" />
              </a>
              <a href="#" className="mr-4">
                <FaYoutube size="2em" />
              </a>
            </div>
            <p className="border-t border-gray-800 mt-1 pt-8 flex justify-between items-center">Copyright &copy; AeduZ Team 2024</p>
            <div className="border-t border-gray-800 mt-0 pt-2 flex items-center">
              <a href="#">Privacy Policy</a>
              <span className="mx-4">|</span>
              <a href="#">Terms of Service</a>
            </div>
            <p className="mt-2 text-gray-400">⚲ Students Residential Area, IIT Bombay, 400076</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;