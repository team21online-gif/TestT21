
import React, { useState, useEffect, useRef } from 'react';
import { LocationType, Service, ServiceCategory } from './types';
import { SERVICE_CATEGORIES } from './constants';

const WHATSAPP_NUMBER = '237694294406';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(SERVICE_CATEGORIES[0]);
  const [selectedService, setSelectedService] = useState<Service>(SERVICE_CATEGORIES[0].services[0]);
  const [location, setLocation] = useState<LocationType>(LocationType.LOCAL);

  const handleTalk = () => {
    const price = location === LocationType.LOCAL ? selectedService.localPrice : selectedService.internationalPrice;
    const message = `Hello Team21 Consulting,\n\nI am interested in:\n\n*Service Group:* ${selectedCategory.title}\n*Course/Service:* ${selectedService.name}\n*Duration:* ${selectedService.duration}\n*Location:* ${location}\n*Price:* ${price}\n\nI would like to discuss this further. Let's talk!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">21</div>
            <span className="font-bold text-xl tracking-tight text-blue-brand">TEAM21 <span className="text-green-brand">CONSULTING</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-semibold">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-brand transition">About</button>
            <button onClick={() => scrollToSection('founder')} className="hover:text-blue-brand transition">Founder</button>
            <button onClick={() => scrollToSection('catalog')} className="text-blue-brand hover:underline underline-offset-4">How can we serve you?</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-blue-brand text-white overflow-hidden relative">
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-5xl">
            Transforming Organizations & Empowering Leaders in a Digital World.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl opacity-90">
            Expert Consulting & Training in USG Compliance, AI Innovation, Servant Leadership, IT, Soft Skills and Cyber Security.
          </p>
          <button 
            onClick={() => scrollToSection('catalog')}
            className="px-10 py-5 bg-green-brand hover:bg-green-700 text-white rounded-full font-bold text-xl transition transform hover:scale-105 shadow-xl"
          >
            How can we serve you?
          </button>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-green-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-brand mb-8">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We are a premier consulting and training firm dedicated to bridging the gap between bureaucratic complexity, technological advancement, and human potential.
                </p>
                <p>
                  Founded by Innocent Forteh, a PMP® Certified Acquisition Specialist and Servant Leadership expert, we bring over 24 years of high-level experience in multiple domains to organizations in Cameroon and across the globe.
                </p>
                <p>
                  Our approach is unique: we combine the rigor of <span className="font-bold text-blue-brand">US Government (USG) compliance</span> with the agility of <span className="font-bold text-green-brand">Artificial Intelligence</span> and the empathy of <span className="font-bold">Servant Leadership</span>.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-6 border-l-4 border-green-brand bg-gray-50">
                  <h4 className="font-bold text-2xl text-blue-brand">20+ Years</h4>
                  <p className="text-gray-600">Global Expertise</p>
                </div>
                <div className="p-6 border-l-4 border-blue-brand bg-gray-50">
                  <h4 className="font-bold text-2xl text-blue-brand">$200M+</h4>
                  <p className="text-gray-600">Portfolios Managed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/consulting/800/1000" alt="Consulting Team" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="italic text-gray-600">"We don’t just teach theory—we deliver battle-tested strategies that work in complex environments."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-blue-brand uppercase tracking-widest">Our Core Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-8 border-blue-brand">
              <i className="fas fa-file-contract text-4xl text-blue-brand mb-6"></i>
              <h3 className="text-2xl font-bold mb-4">USG Market Access & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">Unlock the world of federal funding with insider expertise. We prepare you for pre-award surveys, grant writing, and FAR regulations.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-8 border-green-brand">
              <i className="fas fa-microchip text-4xl text-green-brand mb-6"></i>
              <h3 className="text-2xl font-bold mb-4">AI & Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed">Move beyond the hype. Practical, ethical, and secure AI adoption for productivity, strategy, and risk mitigation.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-8 border-slate-700">
              <i className="fas fa-users-rays text-4xl text-slate-700 mb-6"></i>
              <h3 className="text-2xl font-bold mb-4">Leadership & Org Development</h3>
              <p className="text-gray-600 leading-relaxed">Building institutions that last through character. Servant Leadership, standardized SOPs, and conflict resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-20 bg-blue-brand text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Global Footprint</h2>
            <p className="text-xl opacity-80">Battle-tested in the most challenging environments in the world.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur">
              <h4 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">Central & West Africa</h4>
              <p className="text-sm opacity-80">Cameroon, DRC, Gabon, Ghana, Guinea Conakry</p>
            </div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur">
              <h4 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">East Africa</h4>
              <p className="text-sm opacity-80">Ethiopia, Kenya, Rwanda, Tanzania</p>
            </div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur">
              <h4 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">Southern Africa</h4>
              <p className="text-sm opacity-80">South Africa, Namibia, Angola</p>
            </div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur">
              <h4 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">Middle East & Caribbean</h4>
              <p className="text-sm opacity-80">Iraq (Baghdad), Haiti (Port-au-Prince)</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl italic">"Delivering operational excellence under pressure."</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="https://picsum.photos/seed/founder/800/800" alt="Innocent Forteh" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <span className="text-green-brand font-bold uppercase tracking-widest text-sm">CEO & Principal Consultant</span>
              <h2 className="text-5xl font-extrabold text-blue-brand mt-2 mb-6">Innocent Forteh</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                A "Tri-Sector" leader bridging the worlds of <span className="font-bold">International Development</span>, <span className="font-bold">Technology</span>, and <span className="font-bold">Humanitarian Leadership</span>. Managed $200M+ in bilateral programs for USAID and the U.S. State Department.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h5 className="font-bold text-blue-brand">Bureaucratic Expert</h5>
                  <p className="text-sm text-gray-600">PMP® Certified Acquisition & Assistance Specialist with global field experience.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-green-brand">Tech Pioneer</h5>
                  <p className="text-sm text-gray-600">Certified in Google Cybersecurity, AI Governance, and Prompt Engineering.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-indigo-600">Servant Leader</h5>
                  <p className="text-sm text-gray-600">Co-Founder of Team21 Academy, training over 1,000 leaders worldwide.</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {["PMP®", "Google Cybersecurity", "AI Governance", "Stanford/GSA", "Vanderbilt AI", "Master's Leadership"].map(cert => (
                  <span key={cert} className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Experts Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="p-8 bg-gray-800 rounded-xl relative">
                <i className="fas fa-quote-left text-3xl text-green-brand absolute top-4 left-4 opacity-30"></i>
                <p className="italic text-gray-300 mb-6">"He successfully led several mission-critical initiatives... I have full confidence in his capacity to thrive."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold">PA</div>
                   <div>
                     <h5 className="font-bold">Philippe Accilien</h5>
                     <p className="text-xs text-gray-400">Country Representative, USAID Cameroon</p>
                   </div>
                </div>
             </div>
             <div className="p-8 bg-gray-800 rounded-xl relative border-l-4 border-blue-brand">
                <i className="fas fa-quote-left text-3xl text-blue-brand absolute top-4 left-4 opacity-30"></i>
                <p className="italic text-gray-300 mb-6">"Innocent has consistently demonstrated an unwavering commitment to excellence and technical expertise."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold">CL</div>
                   <div>
                     <h5 className="font-bold">Christopher J. Lamora</h5>
                     <p className="text-xs text-gray-400">U.S. Ambassador</p>
                   </div>
                </div>
             </div>
             <div className="p-8 bg-gray-800 rounded-xl relative">
                <i className="fas fa-quote-left text-3xl text-green-brand absolute top-4 left-4 opacity-30"></i>
                <p className="italic text-gray-300 mb-6">"Architect of Economic Dialogue... turned bureaucratic goals into tangible economic action."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold">ED</div>
                   <div>
                     <h5 className="font-bold">Economic Summit Review</h5>
                     <p className="text-xs text-gray-400">2024 Impact Report</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How can we serve you - Selection Tool */}
      <section id="catalog" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-blue-brand mb-4">How can we serve you?</h2>
            <p className="text-xl text-gray-600">Select a course/service below to get started with Team21 Consulting.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Category Sidebar */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-4">Select Group</h3>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedService(cat.services[0]);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center group ${
                    selectedCategory.id === cat.id 
                      ? `${cat.colorClass} border-transparent text-white shadow-lg` 
                      : 'border-gray-100 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="font-bold text-sm">{cat.title}</span>
                  <i className={`fas fa-chevron-right text-xs transition-transform ${selectedCategory.id === cat.id ? 'translate-x-1' : 'opacity-0'}`}></i>
                </button>
              ))}
            </div>

            {/* Service & Price Display */}
            <div className="lg:col-span-8 bg-gray-50 p-8 md:p-12 rounded-3xl border-2 border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <i className="fas fa-handshake text-9xl"></i>
               </div>
               
               <div className="relative z-10">
                  <div className="mb-10">
                    <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-500 rounded-full text-xs font-bold uppercase mb-2">Category</span>
                    <h3 className="text-3xl font-extrabold text-blue-brand">{selectedCategory.title}</h3>
                    <p className="text-gray-500 mt-1">{selectedCategory.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Select Service/Course</label>
                      <select 
                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl font-bold focus:border-blue-brand outline-none"
                        value={selectedService.name}
                        onChange={(e) => {
                          const s = selectedCategory.services.find(serv => serv.name === e.target.value);
                          if (s) setSelectedService(s);
                        }}
                      >
                        {selectedCategory.services.map(s => (
                          <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Your Location</label>
                      <div className="grid grid-cols-2 bg-white rounded-xl border-2 border-gray-200 p-1">
                        <button 
                          onClick={() => setLocation(LocationType.LOCAL)}
                          className={`py-3 rounded-lg font-bold transition ${location === LocationType.LOCAL ? 'bg-blue-brand text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                          Local
                        </button>
                        <button 
                          onClick={() => setLocation(LocationType.INTERNATIONAL)}
                          className={`py-3 rounded-lg font-bold transition ${location === LocationType.INTERNATIONAL ? 'bg-blue-brand text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                          International
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Investment</span>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-4xl font-black text-green-brand">
                          {location === LocationType.LOCAL ? selectedService.localPrice : selectedService.internationalPrice}
                        </h4>
                        {selectedService.duration && selectedService.duration !== 'Variable' && (
                           <span className="text-gray-400 font-medium">/ {selectedService.duration}</span>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={handleTalk}
                      className="w-full md:w-auto px-12 py-5 bg-green-brand hover:bg-green-700 text-white rounded-xl font-bold text-xl shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      <i className="fab fa-whatsapp"></i>
                      Let's Talk
                    </button>
                  </div>
                  <p className="mt-6 text-xs text-gray-400 italic">
                    Note: Prices are based on standard group training (5-15 participants). Custom solutions available for one-on-one consulting.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">21</div>
                <span className="font-bold text-2xl tracking-tight">TEAM21 <span className="text-green-brand">CONSULTING</span></span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                A premier consulting firm specializing in USG Market Access, Compliance, Artificial Intelligence, and Servant Leadership.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-brand transition"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-brand transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-brand transition"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => {setSelectedCategory(SERVICE_CATEGORIES[0]); scrollToSection('catalog')}} className="hover:text-white transition">For NGOs</button></li>
                <li><button onClick={() => {setSelectedCategory(SERVICE_CATEGORIES[1]); scrollToSection('catalog')}} className="hover:text-white transition">For Private Sector</button></li>
                <li><button onClick={() => {setSelectedCategory(SERVICE_CATEGORIES[4]); scrollToSection('catalog')}} className="hover:text-white transition">For Corporates</button></li>
                <li><button onClick={() => {setSelectedCategory(SERVICE_CATEGORIES[5]); scrollToSection('catalog')}} className="hover:text-white transition">For Individuals</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-brand"></i> +237 694 294 406</li>
                <li className="flex items-center gap-3"><i className="fas fa-map-marker-alt text-blue-brand"></i> Yaoundé & Douala, Cameroon</li>
                <li className="flex items-center gap-3"><i className="fas fa-globe text-blue-brand"></i> Global Virtual Sessions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Team21 Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
