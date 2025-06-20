import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, Zap, Mail, Phone, MapPin, ArrowRight, CheckCircle, ExternalLink, Brain, Target, TrendingUp, Shield, Lightbulb, Settings, Moon, Sun } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true); // Set dark mode as default
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (showCaseStudyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCaseStudyModal]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your inquiry! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }
  };

  const handleCaseStudyClick = (projectName: string) => {
    setSelectedCaseStudy(projectName);
    setShowCaseStudyModal(true);
  };

  const closeCaseStudyModal = () => {
    setShowCaseStudyModal(false);
    setSelectedCaseStudy(null);
  };

  const NextGenRetailCaseStudy = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Study: NextGen Retail Solutions</h2>
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg p-4">
          <p className="text-emerald-800 dark:text-emerald-300 font-semibold">
            Client: MidWest Commerce Co. (Regional Retail Chain)
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Challenge */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Legacy point-of-sale systems and manual inventory tracking were causing frequent stockouts, overstocking, and customer service delays. The company needed a unified platform to handle online and in-store operations while providing real-time analytics.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Solution</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Custom e-commerce platform with integrated inventory management
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Real-time analytics dashboard for sales forecasting
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Automated reorder system with supplier integration
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Mobile-responsive customer portal with loyalty program
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Staff training portal for new system adoption
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Implementation Timeline</h3>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8 months</p>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">340%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">increase in online sales within first year</div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">67%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">reduction in inventory carrying costs</div>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">45%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">faster checkout times in physical stores</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">89%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">improvement in inventory accuracy</div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 md:col-span-2">
              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">ROI achieved within 14 months</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Complete return on investment in record time</div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">AWS</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Stripe API</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ManufacturingAICaseStudy = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Study: Manufacturing AI Transformation</h2>
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg p-4">
          <p className="text-cyan-800 dark:text-cyan-300 font-semibold">
            Client: Precision Parts Manufacturing (150-employee manufacturer)
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Challenge */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            High defect rates, unpredictable equipment failures, and inefficient quality control processes were impacting profitability and customer satisfaction. Manual inspection methods missed critical defects.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Solution</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              AI-powered predictive maintenance system using IoT sensors
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Computer vision quality control for automated defect detection
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Machine learning models for production optimization
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Real-time dashboard for plant floor monitoring
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Comprehensive staff training on AI tools and processes
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Implementation Timeline</h3>
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">12 months</p>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">45%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">reduction in unplanned downtime</div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">60%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">decrease in defect rates</div>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">28%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">increase in overall equipment effectiveness (OEE)</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$2.3M</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">annual savings in maintenance costs</div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 md:col-span-2">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">reduction in manual inspection time</div>
            </div>
          </div>
        </div>

        {/* Key Services */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Services</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <Target size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Strategy Development
            </li>
            <li className="flex items-start">
              <Settings size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Implementation
            </li>
            <li className="flex items-start">
              <Users size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Training
            </li>
            <li className="flex items-start">
              <TrendingUp size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Change Management
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const HealthcareAICaseStudy = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Study: Healthcare AI Integration</h2>
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4">
          <p className="text-blue-800 dark:text-blue-300 font-semibold">
            Client: Regional Health Network (5 hospitals, 12 clinics)
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Challenge */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Patient processing bottlenecks, inconsistent diagnostic accuracy across facilities, and administrative inefficiencies were impacting patient care quality and operational costs.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Solution</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              AI readiness assessment across all facilities
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Implementation roadmap for gradual AI adoption
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              AI-powered diagnostic assistance tools for radiology
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Automated patient triage and scheduling system
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Comprehensive training program for medical and administrative staff
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Performance monitoring and ROI measurement framework
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Implementation Timeline</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">18 months</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">(phased rollout)</p>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">faster patient processing times</div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">22%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">improvement in diagnostic accuracy</div>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">40%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">reduction in administrative workload</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">staff adoption rate after training</div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">$4.1M</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">annual operational savings</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">18%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">increase in patient satisfaction scores</div>
            </div>
          </div>
        </div>

        {/* Key Services */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Services</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <Target size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Assessment
            </li>
            <li className="flex items-start">
              <Settings size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Roadmap Development
            </li>
            <li className="flex items-start">
              <TrendingUp size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Change Management
            </li>
            <li className="flex items-start">
              <Users size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Training
            </li>
            <li className="flex items-start">
              <Shield size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Performance Monitoring
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const StaySuitelyCaseStudy = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Study: StaySuitely</h2>
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg p-4">
          <p className="text-emerald-800 dark:text-emerald-300 font-semibold">
            Client: Boutique Hotel Group (12 properties across 4 states)
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Challenge */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional booking systems offered generic loyalty programs with poor customer retention. The client wanted to differentiate with innovative rewards while ensuring complete transparency in loyalty point allocation and redemption to build trust with tech-savvy travelers.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Solution</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Custom booking platform with integrated property management
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Blockchain-based loyalty token system for transparent rewards
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Gamified user experience with achievement levels and bonus challenges
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Smart contracts for automatic reward distribution
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Mobile app with real-time token balance and exclusive perks
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Staff training on blockchain concepts and customer support
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Implementation Timeline</h3>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10 months</p>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">78%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">increase in direct bookings (bypassing third-party platforms)</div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">156%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">improvement in customer retention rates</div>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">92%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">user engagement with loyalty program features</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">34%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">increase in average booking value</div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">89%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">customer satisfaction with reward transparency</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">Featured</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">in hospitality tech publications as innovation leader</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <Shield size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Transparent blockchain reward tracking
            </li>
            <li className="flex items-start">
              <Zap size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Gamified booking experience with achievement unlocks
            </li>
            <li className="flex items-start">
              <ArrowRight size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Transferable loyalty tokens between partner properties
            </li>
            <li className="flex items-start">
              <Users size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Exclusive member-only room upgrades and amenities
            </li>
            <li className="flex items-start">
              <ExternalLink size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              Social sharing integration for bonus token earning
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">Ethereum/Polygon blockchain</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Web3 integration</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Stripe payments</span>
          </div>
        </div>

        {/* Innovation Impact */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">Innovation Impact</h3>
          <p className="text-emerald-100 leading-relaxed">
            First hospitality client to successfully implement blockchain loyalty rewards, setting new industry standards for transparency and customer engagement in the boutique hotel sector.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCaseStudy = () => {
    switch (selectedCaseStudy) {
      case 'NextGen Retail Solutions':
        return <NextGenRetailCaseStudy />;
      case 'Manufacturing AI Transformation':
        return <ManufacturingAICaseStudy />;
      case 'Healthcare AI Integration':
        return <HealthcareAICaseStudy />;
      case 'StaySuitely':
        return <StaySuitelyCaseStudy />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img src="/src/assets/Grayscale Transparent.svg" alt="ACR LABS Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">ACR LABS</span>
              </div>
              
              {/* Wrapper for right-aligned items */}
              <div className="flex items-center">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex items-baseline space-x-4">
                    {[
                      { id: 'home', label: 'Home' },
                      { id: 'about', label: 'Services' },
                      { id: 'portfolio', label: 'Portfolio' },
                      { id: 'contact', label: 'Contact' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeSection === item.id
                            ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dark Mode Toggle (Desktop) */}
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                {/* Mobile menu button & Theme Toggle (Mobile) */}
                <div className="md:hidden flex items-center space-x-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'Services' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section with Banner Taking 2/3 Width */}
        <section id="home" className="pt-16 min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {/* Banner - 2/3 Width of Screen */}
          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="w-2/3 max-w-4xl">
              <img 
                src="/src/assets/Facebook Cover Image.png" 
                alt="ACR LABS - Software Development & AI Transformation" 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex-1 flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
                <Brain size={16} className="mr-2" />
                Software Development & AI Transformation
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Accelerating Business Through
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  Technology & AI Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We partner with forward-thinking companies to build custom software solutions and guide comprehensive AI transformation journeys that drive measurable business outcomes and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Our Work
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  Start Your Transformation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About/Services Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Your Trusted Partner for Digital Excellence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We deliver comprehensive end-to-end solutions that combine custom software development with strategic AI consulting to transform how businesses operate and compete in today's market.
              </p>
            </div>

            {/* Core Services */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border dark:border-gray-700">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-6">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Software Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  From initial concept to final deployment, we build scalable and robust applications tailored to your unique business requirements using cutting-edge technologies and industry best practices.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Web & Mobile Applications</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />API Development & Integration</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Database Design & Optimization</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Cloud Architecture & DevOps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border dark:border-gray-700">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                  <Brain size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Transformation Consulting</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Navigate your AI journey with complete confidence through our comprehensive consulting approach, from strategic development to implementation and ongoing optimization.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />AI Readiness Assessment</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Solution Identification & Strategy</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Team Training & Capability Building</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" />Implementation & ROI Monitoring</li>
                </ul>
              </div>
            </div>

            {/* AI Consulting Process */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Our AI Transformation Methodology
                </h3>
                <p className="text-emerald-100 max-w-3xl mx-auto">
                  A proven and systematic approach to AI adoption that ensures measurable business impact and sustainable competitive advantage for your organization.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Target size={32} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Assess & Strategize</h4>
                  <p className="text-emerald-100 text-sm">Comprehensive business analysis, AI readiness evaluation, and strategic roadmap development</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Settings size={32} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Implement & Train</h4>
                  <p className="text-emerald-100 text-sm">Solution deployment, team capability building, and change management support</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Optimize & Scale</h4>
                  <p className="text-emerald-100 text-sm">Performance monitoring, ROI measurement, and continuous optimization strategies</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">48hr</div>
                <div className="text-gray-600 dark:text-gray-400">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Transformative Solutions & Strategic Outcomes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of successful software solutions and AI transformation projects that have delivered measurable business impact across various industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Development Projects */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Code size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">E-Commerce Platform</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">NextGen Retail Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive e-commerce platform that increased client sales by 340% and streamlined operations with advanced inventory management and analytics capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">PostgreSQL</span>
                  </div>
                  <button 
                    onClick={() => handleCaseStudyClick('NextGen Retail Solutions')}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Booking Platform</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">StaySuitely</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    An innovative booking platform featuring a novel ACR Labs-designed loyalty program with a gamified rewards system connected to blockchain technology for enhanced user engagement and transparent reward distribution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">Blockchain</span>
                  </div>
                  <button 
                    onClick={() => handleCaseStudyClick('StaySuitely')}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Consulting Projects */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Brain size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">AI Strategy Consulting</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Manufacturing AI Transformation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Guided a mid-size manufacturer through complete AI adoption, implementing predictive maintenance and quality control systems that reduced downtime by 45% and defects by 60%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">Strategy</span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm">Implementation</span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm">Training</span>
                  </div>
                  <button 
                    onClick={() => handleCaseStudyClick('Manufacturing AI Transformation')}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Lightbulb size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Digital Transformation</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Healthcare AI Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Led comprehensive AI readiness assessment and implementation roadmap for a healthcare network, resulting in 30% faster patient processing and improved diagnostic accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Assessment</span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">Roadmap</span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">Change Mgmt</span>
                  </div>
                  <button 
                    onClick={() => handleCaseStudyClick('Healthcare AI Integration')}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Let's discuss how we can accelerate your digital transformation journey with custom software solutions and strategic AI implementation that drives real results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">projects@acrlabs.io</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+1 (307) 205-9277</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Office</h4>
                      <p className="text-gray-600 dark:text-gray-300">30 N Gould St Ste 50605</p>
                      <p className="text-gray-600 dark:text-gray-300">Sheridan, WY 82801</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We aim to respond to all inquiries within 48 hours. For urgent projects, call us directly for faster assistance.
                  </p>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-600 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-600 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-600 ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Tell us about your software development needs or AI transformation goals..."
                    ></textarea>
                    {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <img src="/src/assets/Grayscale Transparent.svg" alt="ACR LABS" className="h-48 w-auto filter brightness-0 invert" />
              </div>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Accelerating business transformation through innovative software development and strategic AI consulting. Partner with us to build the future of your industry.
              </p>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">
                  © 2025 ACR LABS. All rights reserved. | Software Development & AI Transformation Services
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Case Study Modal */}
        {showCaseStudyModal && selectedCaseStudy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-6xl max-h-[90vh] overflow-y-auto relative">
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCaseStudy} Case Study</h2>
                <button
                  onClick={closeCaseStudyModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              <div className="p-6">
                {renderCaseStudy()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;