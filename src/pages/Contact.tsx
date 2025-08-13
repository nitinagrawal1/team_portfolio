import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Users, Award, Clock, Target } from 'lucide-react';

const FONT_STYLE = { fontFamily: "Montserrat, sans-serif" };
const PRIMARY_ACCENT = "text-purple-400";
const DARK_BG = "bg-black";
const LIGHT_TEXT = "text-gray-200";
const MUTED_TEXT = "text-gray-400";
const SECONDARY_BG = "bg-gray-900";
const ACCENT_COLOR = "purple"; // Using this for Tailwind classes like bg-purple-600

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    expertise: '',
    budget: '',
    message: ''
  });

const handleSubmit = async () => {
  // Frontend validation
  for (const [key, value] of Object.entries(formData)) {
    if (!value.trim()) {
      alert(`❌ Please fill in the ${key} field.`);
      return;
    }
  }

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Thank you! Your message has been sent.");
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        expertise: '',
        budget: '',
        message: ''
      });
    } else {
      alert("❌ Failed to send: " + data.error);
    }
  } catch (error) {
    alert("❌ Network error: " + error.message);
  }
};



  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "5+", label: "Years Experience", icon: Target }
  ];

  return (
    <div className={`${DARK_BG} min-h-screen text-white`} style={FONT_STYLE}>
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 px-6 bg-cover bg-center text-white overflow-hidden" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2670&auto=format&fit=crop')` 
        }}
      >
        {/* Dark overlay to match the CTA section on About page */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-8 leading-tight">
            Let's get in touch
            <br />
            <span className="font-bold text-white">for your next project</span>
          </h1>
          <p className={`text-lg sm:text-xl ${LIGHT_TEXT} max-w-2xl mx-auto mb-12 leading-relaxed`}>
            We partner with forward-thinking companies to create digital experiences that drive meaningful results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 px-8 lg:px-20 py-20 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-light mb-8 leading-tight">
              Connect with
              <br />
              <span className="font-bold">Our Team of Experts</span>
            </h1>

            <p className={`text-lg ${MUTED_TEXT} mb-12 leading-relaxed`}>
              Contact our team of excellence-driven experts today to bring your project to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <Phone className={`w-5 h-5 ${PRIMARY_ACCENT}`} />
                <span className={`${LIGHT_TEXT} font-medium`}>713.953.5200</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className={`w-5 h-5 ${PRIMARY_ACCENT}`} />
                <span className={`${LIGHT_TEXT} font-medium`}>lp@ljp.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className={`w-5 h-5 ${PRIMARY_ACCENT}`} />
                <span className={`${LIGHT_TEXT} font-medium`}>See Our Locations</span>
              </div>
            </div>

            {/* Team Image Section */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Professional team member"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className={`w-full lg:w-1/2 ${SECONDARY_BG} px-8 py-20 lg:px-20 flex flex-col justify-center`}>
          <div className="max-w-2xl mx-auto w-full">
            <h2 className="text-3xl font-light text-white mb-8">
              Send us a <span className="font-bold">message</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name & Email */}
              <div className="col-span-1">
                <label htmlFor="fullName" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                />
              </div>

              {/* Phone Number & Location */}
              <div className="col-span-1">
                <label htmlFor="phone" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Phone Number"
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="location" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Location</label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Location"
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                />
              </div>

              {/* Expertise */}
              <div className="md:col-span-2">
                <label htmlFor="expertise" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>What Expertise You're Interested In</label>
                <select
                  id="expertise"
                  value={formData.expertise}
                  onChange={(e) => handleInputChange('expertise', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none ${LIGHT_TEXT}`}
                >
                  <option value="" className={`${SECONDARY_BG} ${MUTED_TEXT}`}>Select</option>
                  <option value="web-development" className={`${SECONDARY_BG} text-white`}>Web Development</option>
                  <option value="mobile-development" className={`${SECONDARY_BG} text-white`}>Mobile Development</option>
                  <option value="ui-ux-design" className={`${SECONDARY_BG} text-white`}>UI/UX Design</option>
                  <option value="backend-development" className={`${SECONDARY_BG} text-white`}>Backend Development</option>
                  <option value="devops-cloud" className={`${SECONDARY_BG} text-white`}>DevOps & Cloud</option>
                  <option value="consulting" className={`${SECONDARY_BG} text-white`}>Consulting</option>
                </select>
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <label htmlFor="budget" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Budget Range</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none ${LIGHT_TEXT}`}
                >
                  <option value="" className={`${SECONDARY_BG} ${MUTED_TEXT}`}>Select Budget</option>
                  <option value="under-10k" className={`${SECONDARY_BG} text-white`}>Under $10k</option>
                  <option value="10k-25k" className={`${SECONDARY_BG} text-white`}>$10k - $25k</option>
                  <option value="25k-50k" className={`${SECONDARY_BG} text-white`}>$25k - $50k</option>
                  <option value="50k-100k" className={`${SECONDARY_BG} text-white`}>$50k - $100k</option>
                  <option value="over-100k" className={`${SECONDARY_BG} text-white`}>$100k+</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className={`block ${MUTED_TEXT} text-sm font-medium mb-2`}>Tell Us About Your Project</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Leave your message here"
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className={`mt-8 w-full bg-${ACCENT_COLOR}-600 hover:bg-${ACCENT_COLOR}-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 group`}
            >
              <span className="text-xl">SUBMIT</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;