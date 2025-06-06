import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Languages, 
  Heart, 
  Target, 
  Mail, 
  Linkedin, 
  Menu, 
  X,
  Award,
  BookOpen,
  Waves
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'hobbies', 'goal', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-purple-100 text-purple-700 font-semibold'
          : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Swapnali Nanekar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavLink href="about" isActive={activeSection === 'about'}>About</NavLink>
              <NavLink href="education" isActive={activeSection === 'education'}>Education</NavLink>
              <NavLink href="skills" isActive={activeSection === 'skills'}>Skills</NavLink>
              <NavLink href="hobbies" isActive={activeSection === 'hobbies'}>Hobbies</NavLink>
              <NavLink href="goal" isActive={activeSection === 'goal'}>Goal</NavLink>
              <NavLink href="contact" isActive={activeSection === 'contact'}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-purple-700 hover:bg-purple-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100">
              <div className="flex flex-col space-y-2">
                <NavLink href="about" isActive={activeSection === 'about'}>About</NavLink>
                <NavLink href="education" isActive={activeSection === 'education'}>Education</NavLink>
                <NavLink href="skills" isActive={activeSection === 'skills'}>Skills</NavLink>
                <NavLink href="hobbies" isActive={activeSection === 'hobbies'}>Hobbies</NavLink>
                <NavLink href="goal" isActive={activeSection === 'goal'}>Goal</NavLink>
                <NavLink href="contact" isActive={activeSection === 'contact'}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section / About Me */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Swapnali</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate commerce student on an exciting journey into frontend development, 
              combining business acumen with technical skills to create meaningful digital experiences.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <Mail className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a strong foundation through academic excellence and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Current Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor's in Commerce</h3>
                  <p className="text-purple-600 font-medium">3rd Year Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                Currently pursuing graduation with a focus on understanding business fundamentals 
                while building technical skills in parallel.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                  <p className="text-teal-600 font-medium">Achievement Badges</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">MSCIT (Microsoft Certificate in IT)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Scholarship Recipient</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">NMMS (National Means Merit Scholarship)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Languages Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Languages className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Languages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Developing technical expertise while maintaining strong communication abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">&lt;/&gt;</span>
                </div>
                Frontend Development
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">HTML</span>
                    <span className="text-purple-600 text-sm font-semibold">Learning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">CSS</span>
                    <span className="text-purple-600 text-sm font-semibold">Learning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '55%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">JavaScript</span>
                    <span className="text-purple-600 text-sm font-semibold">Learning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <Languages className="text-white" size={16} />
                </div>
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <span className="text-gray-800 font-medium">Hindi</span>
                  <span className="text-purple-600 font-semibold">Native</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                  <span className="text-gray-800 font-medium">English</span>
                  <span className="text-blue-600 font-semibold">Fluent</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg">
                  <span className="text-gray-800 font-medium">Marathi</span>
                  <span className="text-teal-600 font-semibold">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hobbies & Interests</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maintaining a balanced lifestyle through enriching activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Reading</h3>
                  <p className="text-purple-600 font-medium">Knowledge Explorer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Passionate about exploring different genres and expanding knowledge through books. 
                Reading helps me stay curious and continuously learn new perspectives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Waves className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Swimming</h3>
                  <p className="text-blue-600 font-medium">Fitness Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Swimming keeps me physically active and mentally refreshed. It's my go-to activity 
                for maintaining fitness and finding peace in the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section id="goal" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Goal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driven by ambition and fueled by passion for technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Target size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Aspiring Software Engineer</h3>
                <p className="text-xl leading-relaxed mb-8 text-purple-100">
                  To become a skilled software engineer specializing in frontend development 
                  and work at a leading tech company, creating innovative solutions that make 
                  a positive impact on users' lives.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Frontend</div>
                    <div className="text-purple-200">Specialization</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Tech Giants</div>
                    <div className="text-purple-200">Dream Companies</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Innovation</div>
                    <div className="text-purple-200">Impact Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start a conversation? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl hover:from-purple-100 hover:to-blue-100 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold">Email</div>
                    <div className="text-purple-600">your.email@example.com</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl hover:from-blue-100 hover:to-teal-100 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-800 font-semibold">LinkedIn</div>
                    <div className="text-blue-600">linkedin.com/in/your-profile</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  Feel free to reach out for collaboration opportunities, mentorship, or just to say hello!
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Mail className="mr-2" size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Swapnali Nanekar
          </div>
          <p className="text-gray-400 mb-4">
            Aspiring Frontend Developer | Commerce Student | Tech Enthusiast
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Swapnali Nanekar. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;