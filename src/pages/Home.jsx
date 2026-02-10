import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, PlayCircle, Cloud, Shield, 
  BarChart3, Smartphone, Cpu, Headphones, Calendar, 
  Projector, Heart, Users, Quote, Star, MapPin, 
  Phone, Mail, Twitter, Linkedin, Facebook, Instagram,
  Send, ChevronLeft, ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const features = [
    { icon: <Cloud size={24} />, title: 'Cloud Integration', desc: 'Seamless integration with leading cloud platforms', color: 'bg-blue-100 text-blue-600' },
    { icon: <Shield size={24} />, title: 'Enterprise Security', desc: 'Military-grade security for your sensitive data', color: 'bg-green-100 text-green-600' },
    { icon: <BarChart3 size={24} />, title: 'Advanced Analytics', desc: 'Turn data into actionable insights', color: 'bg-purple-100 text-purple-600' },
    { icon: <Smartphone size={24} />, title: 'Mobile First', desc: 'Responsive designs for all devices', color: 'bg-yellow-100 text-yellow-600' },
    { icon: <Cpu size={24} />, title: 'AI Powered', desc: 'Automate processes with AI', color: 'bg-red-100 text-red-600' },
    { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Round-the-clock customer support', color: 'bg-cyan-100 text-cyan-600' },
  ];

  const stats = [
    { icon: <Calendar size={24} />, number: '15+', label: 'Years Experience' },
    { icon: <Projector size={24} />, number: '500+', label: 'Projects Completed' },
    { icon: <Heart size={24} />, number: '98%', label: 'Client Retention' },
    { icon: <Users size={24} />, number: '50+', label: 'Team Members' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CTO, TechFlow Inc.', text: 'NexaTech transformed our digital infrastructure, resulting in a 40% increase in operational efficiency. Their team is exceptional.', avatar: 'SJ', rating: 5 },
    { name: 'Michael Chen', role: 'Director, Global Solutions', text: 'The cloud migration was seamless and our team adapted quickly. Their support has been outstanding.', avatar: 'MC', rating: 5 },
    { name: 'Elena Rodriguez', role: 'CEO, InnovateCorp', text: 'Working with NexaTech was a game-changer for our business. Their innovative solutions helped us scale rapidly.', avatar: 'ER', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - First section without header */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-8">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Innovating <span className="text-blue-600">Tomorrow's</span> Solutions Today
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-6 mb-8">
                We provide cutting-edge technology solutions that drive business growth, enhance efficiency, and create exceptional user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Explore Solutions
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
                  <PlayCircle size={20} />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-900">250+</div>
                  <div className="text-gray-600">Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">99%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Main Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
                    <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <BarChart3 size={64} className="text-white" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-8 left-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                    <Cloud className="text-blue-500" size={20} />
                    <span className="text-sm font-medium">Cloud Solutions</span>
                  </div>
                  <div className="absolute bottom-8 right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                    <Shield className="text-green-500" size={20} />
                    <span className="text-sm font-medium">Secure & Reliable</span>
                  </div>
                  <div className="absolute top-32 right-8 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                    <Cpu className="text-purple-500" size={20} />
                    <span className="text-sm font-medium">Fast Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive suite of technology solutions designed to meet the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Driving Digital Transformation Across Industries
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience, we've helped businesses of all sizes transform their operations through innovative technology solutions.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Our Success Stories
              </button>
            </div>

            {/* Right Content - Stats */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their operations with our solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <Quote className="absolute top-6 left-6 text-blue-100" size={40} />
              
              <div className="mb-8">
                <p className="text-xl text-gray-700 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentTestimonial ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     


     
    </div>
  );
};

export default HomePage;