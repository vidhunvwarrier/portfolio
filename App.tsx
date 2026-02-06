
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  ExternalLink, 
  Menu,
  X,
  Terminal,
  Monitor,
  ArrowUpRight,
  Radio,
  Box,
  Sun,
  Moon,
  Bot,
  MessageSquare,
  Clock,
  Lock,
  Plus,
  Trash2,
  Save,
  LogOut,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS, EDUCATION, BLOG_POSTS as INITIAL_BLOG_POSTS } from './constants';

type View = 'portfolio' | 'login' | 'admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Dynamic Data State
  const [blogPosts, setBlogPosts] = useState(() => {
    const saved = localStorage.getItem('v_warrier_blogs');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  // New Post State
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    tags: '',
    link: ''
  });

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    localStorage.setItem('v_warrier_blogs', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    if (currentView === 'portfolio') {
      const sectionIds = ['home', 'experience', 'skills', 'projects', 'blog', 'education'];
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.2, rootMargin: '-80px 0px -20% 0px' });

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.current?.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.current?.disconnect();
    };
  }, [currentView]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@warrier.bot' && loginPass === 'robotics2025') {
      setIsLoggedIn(true);
      setCurrentView('admin');
      setLoginError('');
    } else {
      setLoginError('ACCESS_DENIED: INVALID_CREDENTIALS');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('portfolio');
  };

  const addBlogPost = () => {
    if (!newPost.title || !newPost.excerpt) return;
    const postToAdd = {
      ...newPost,
      tags: newPost.tags.split(',').map(t => t.trim())
    };
    setBlogPosts([postToAdd, ...blogPosts]);
    setNewPost({ title: '', excerpt: '', date: new Date().toLocaleDateString(), tags: '', link: '' });
  };

  const deleteBlogPost = (index: number) => {
    const updated = blogPosts.filter((_: any, i: number) => i !== index);
    setBlogPosts(updated);
  };

  const navItems = [
    { label: '01_PROTOCOL', id: 'home' },
    { label: '02_MISSION', id: 'experience' },
    { label: '03_MATRIX', id: 'skills' },
    { label: '04_ARCHIVE', id: 'projects' },
    { label: '05_BLOG', id: 'blog' },
    { label: '06_ACADEMY', id: 'education' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'portfolio') {
      setCurrentView('portfolio');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  if (currentView === 'login') {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className={`max-w-md w-full border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} p-12 bg-[var(--bg-surface)] relative shadow-2xl`}>
          <div className="caution-tape h-2 w-full absolute top-0 left-0"></div>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 border border-yellow-400 rotate-45 mb-8">
              <Lock className="w-10 h-10 text-yellow-400 -rotate-45" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">System Authentication</h2>
            <p className="text-neutral-500 mono text-xs mt-2 uppercase tracking-widest">{">> Security_Level: Omega"}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] mono font-black text-neutral-500 uppercase tracking-widest">Admin_Identifier</label>
              <input 
                type="email" 
                placeholder="admin@warrier.bot"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`w-full bg-transparent border ${isDarkMode ? 'border-neutral-800 focus:border-yellow-400' : 'border-neutral-200 focus:border-yellow-400'} p-4 outline-none transition-all mono text-sm`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] mono font-black text-neutral-500 uppercase tracking-widest">Neural_Passcode</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className={`w-full bg-transparent border ${isDarkMode ? 'border-neutral-800 focus:border-yellow-400' : 'border-neutral-200 focus:border-yellow-400'} p-4 outline-none transition-all mono text-sm`}
              />
            </div>
            {loginError && <p className="text-red-500 mono text-[10px] font-bold text-center">{loginError}</p>}
            
            <button type="submit" className="w-full bg-yellow-400 text-black py-4 font-black uppercase tracking-widest text-sm hover:bg-neutral-800 hover:text-white transition-all">
              INITIALIZE_SESSION
            </button>
          </form>

          <button 
            onClick={() => setCurrentView('portfolio')}
            className="w-full mt-4 text-neutral-500 mono text-[10px] font-bold uppercase hover:text-yellow-400 transition-colors"
          >
            {"<< Return_to_Public_Feed"}
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'admin') {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} pt-32 px-6 lg:px-12 pb-24`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-2">
              <span className="text-yellow-400 mono font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Admin_Override_Active
              </span>
              <h2 className="text-7xl font-black uppercase tracking-tighter">Control Center</h2>
            </div>
            <button 
              onClick={handleLogout}
              className="px-8 py-3 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white font-black text-xs mono uppercase tracking-widest transition-all flex items-center gap-2"
            >
              TERMINATE_SESSION <LogOut className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className={`border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} p-10 bg-[var(--bg-surface)]`}>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-4">
                  <Plus className="w-6 h-6 text-yellow-400" /> New Research Log
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] mono font-black text-neutral-500 uppercase">Log_Title</label>
                    <input 
                      type="text" 
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      className="w-full bg-black/20 border border-neutral-800 p-3 outline-none focus:border-yellow-400 mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] mono font-black text-neutral-500 uppercase">Log_Excerpt</label>
                    <textarea 
                      rows={4}
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                      className="w-full bg-black/20 border border-neutral-800 p-3 outline-none focus:border-yellow-400 mono text-sm resize-none"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] mono font-black text-neutral-500 uppercase">Tags (Comma Sep)</label>
                      <input 
                        type="text" 
                        value={newPost.tags}
                        onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                        className="w-full bg-black/20 border border-neutral-800 p-3 outline-none focus:border-yellow-400 mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] mono font-black text-neutral-500 uppercase">External_Link</label>
                      <input 
                        type="text" 
                        value={newPost.link}
                        onChange={(e) => setNewPost({...newPost, link: e.target.value})}
                        className="w-full bg-black/20 border border-neutral-800 p-3 outline-none focus:border-yellow-400 mono text-sm"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={addBlogPost}
                    className="w-full bg-yellow-400 text-black py-4 font-black uppercase tracking-widest text-sm hover:bg-neutral-800 hover:text-white transition-all flex justify-center items-center gap-2"
                  >
                    COMMIT_DATA <Save className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className={`border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} p-10 bg-[var(--bg-surface)]`}>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Active Archives</h3>
                <div className="space-y-4">
                  {blogPosts.map((post: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-6 border border-neutral-800/50 hover:border-yellow-400/30 transition-all bg-black/10">
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-lg">{post.title}</h4>
                        <p className="text-[10px] mono text-neutral-500 uppercase">{post.date} • {post.tags.join(', ')}</p>
                      </div>
                      <button 
                        onClick={() => deleteBlogPost(i)}
                        className="p-3 text-neutral-500 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  {blogPosts.length === 0 && <p className="text-center text-neutral-500 mono py-10 tracking-widest">NO_DATA_AVAILABLE</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen selection:bg-yellow-400 selection:text-black transition-theme`}>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-md border-[var(--border)] py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-white' : 'bg-black'} flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500`}>
              <Bot className={`w-6 h-6 ${isDarkMode ? 'text-black' : 'text-white'} -rotate-45 group-hover:rotate-0 transition-transform duration-500`} />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none uppercase whitespace-nowrap">Vidhun V Warrier</span>
              <span className="text-[10px] mono text-neutral-500 font-bold uppercase tracking-[0.2em] whitespace-nowrap hidden sm:block">Senior Robotics Engineer</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 text-[11px] mono font-bold transition-all hover:text-[var(--text-primary)] ${
                  activeSection === item.id ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-neutral-500'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-4 bg-neutral-500/20 mx-4"></div>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-neutral-500/10 transition-colors mr-4 ${isDarkMode ? 'text-yellow-400' : 'text-black'}`}
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`px-6 py-2 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} text-[11px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors shadow-lg`}
            >
              INITIALIZE_LINK
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-neutral-500">
               {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--text-primary)]">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden fixed inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'} z-40 pt-24 px-8`}>
            <div className="space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block text-4xl font-black uppercase tracking-tighter hover:text-yellow-400"
                >
                  {item.label.split('_')[1]}
                </a>
              ))}
              <div className="pt-10 border-t border-neutral-800">
                <button 
                  onClick={() => { setIsMenuOpen(false); setCurrentView('login'); }}
                  className="w-full bg-yellow-400 text-black py-4 font-black uppercase tracking-widest text-sm"
                >
                  ADMIN_LOGIN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-12 pt-20">
          <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-4xl space-y-12">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-[110px] xl:text-[140px] font-black leading-[0.85] uppercase tracking-tighter">
                  Vidhun V<br />
                  <span className="text-outline">Warrier</span>
                </h1>
                <p className="text-xl md:text-3xl font-black uppercase tracking-tight text-neutral-500">
                  Senior Robotics Engineer
                </p>
              </div>

              <div className="max-w-3xl space-y-8">
                <p className="text-xl md:text-3xl text-neutral-500 font-light leading-relaxed">
                  Building <span className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold italic underline decoration-yellow-400`}>autonomous intelligence</span> for high-stakes environments through advanced sensor fusion and ROS architectures.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="px-10 py-5 bg-yellow-400 text-black font-black text-sm uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all flex items-center gap-2 group shadow-2xl shadow-yellow-400/20">
                    ESTABLISH_LINK
                    <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" className={`px-10 py-5 border ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'} font-black text-sm uppercase tracking-widest transition-all`}>
                    GET_RESUME.LOG
                  </a>
                </div>
              </div>

              <div className="pt-20 hidden md:block">
                <div className="flex gap-16 text-[11px] mono text-neutral-500 font-black uppercase tracking-[0.2em]">
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-600">01_STACK</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>ROS2_HUMBLE</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-600">02_CORE</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>SLAM_NAV2</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-600">03_DEPLOY</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>NVIDIA_JETSON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400/20 via-transparent to-transparent blur-2xl"></div>
              <div className={`relative border ${isDarkMode ? 'border-white/15' : 'border-black/10'} bg-[var(--bg-surface)] p-4 shadow-2xl`}>
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rotate-45"></div>
                <img
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80"
                  alt="Robotics engineer working with sensors"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
                <div className="mt-4 flex items-center justify-between text-[10px] mono font-black uppercase tracking-[0.3em] text-neutral-500">
                  <span>VISION_FEED</span>
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>LIVE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none hidden lg:block overflow-hidden">
             <div className="text-[300px] font-black leading-none rotate-90 origin-top-left translate-x-1/2">
                ROBOTICS
             </div>
          </div>
        </section>

        <section id="experience" className={`py-40 px-6 lg:px-12 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} relative transition-theme scroll-mt-20`}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 mb-24">
              <div className="lg:col-span-4">
                <h2 className="text-8xl font-black uppercase tracking-tighter leading-none mb-6">Mission<br />Logs</h2>
                <div className={`w-full h-1 ${isDarkMode ? 'bg-black' : 'bg-white'} mb-8 shadow-sm`}></div>
                <p className={`${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'} text-lg font-medium leading-relaxed`}>
                  Deployment history across industrial, automotive, and marine autonomous initiatives.
                </p>
              </div>
              <div className="lg:col-span-8 pt-12">
                <div className="space-y-32">
                  {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="group relative">
                      <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-32 shrink-0">
                          <span className={`text-4xl font-black ${isDarkMode ? 'text-neutral-200 group-hover:text-black' : 'text-neutral-800 group-hover:text-white'} transition-colors duration-500`}>0{index + 1}</span>
                        </div>
                        <div className="flex-grow space-y-10">
                          <div className="space-y-4">
                            <h3 className="text-5xl font-black uppercase tracking-tight group-hover:text-yellow-500 transition-colors leading-none">
                              {exp.role}
                            </h3>
                            <div className={`flex flex-wrap gap-6 text-xs mono font-black uppercase tracking-widest ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                              <span className={isDarkMode ? 'text-black' : 'text-white'}>{exp.company}</span>
                              {exp.client && <span>• CLIENT: {exp.client}</span>}
                              <span>• {exp.period}</span>
                              <span>• {exp.location}</span>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-1 gap-8">
                            {exp.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex gap-8 items-start">
                                <div className="mt-2.5 w-2 h-2 bg-yellow-400 rotate-45 shrink-0 shadow shadow-yellow-400/50"></div>
                                <p className={`${isDarkMode ? 'text-neutral-600' : 'text-neutral-300'} text-xl font-medium leading-tight`}>{bullet}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-40 px-6 lg:px-12 relative bg-[var(--bg-deep)] scroll-mt-20">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
              <div className="space-y-2">
                <span className="text-yellow-500 mono font-bold text-xs tracking-widest uppercase">Expertise Inventory</span>
                <h2 className="text-8xl font-black uppercase tracking-tighter">Core Matrix</h2>
              </div>
              <div className="flex gap-4">
                <div className={`w-14 h-14 ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} flex items-center justify-center border border-neutral-500/10`}>
                  <Monitor className={`w-7 h-7 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <div className={`w-14 h-14 ${isDarkMode ? 'bg-white' : 'bg-black'} flex items-center justify-center`}>
                  <Terminal className={`w-7 h-7 ${isDarkMode ? 'text-black' : 'text-white'}`} />
                </div>
              </div>
            </div>

            <div className={`grid lg:grid-cols-3 gap-0 border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
              {SKILLS.map((category, idx) => (
                <div key={idx} className={`p-16 border-neutral-800 hover:bg-neutral-500/5 transition-colors duration-500 last:border-0 border-r lg:border-r`}>
                  <div className="flex items-center gap-6 mb-20">
                    <span className={`text-7xl font-black ${isDarkMode ? 'text-neutral-800' : 'text-neutral-200'}`}>0{idx + 1}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-primary)]">{category.category}</h3>
                  </div>

                  <div className="space-y-12">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group cursor-default">
                        <div className="flex justify-between items-center text-xs mono font-black uppercase tracking-widest mb-4">
                          <span className="text-neutral-500 group-hover:text-yellow-400 transition-colors">{skill.name}</span>
                          <span className="text-neutral-600">[{skill.level}/5]</span>
                        </div>
                        <div className="flex gap-1.5 h-1.5">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`flex-grow transition-all duration-700 ${i < skill.level ? 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.2)]' : 'bg-neutral-500/10'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`py-40 px-6 lg:px-12 transition-theme ${isDarkMode ? 'bg-neutral-50/50 text-black' : 'bg-neutral-900 text-white'} scroll-mt-20`}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
              <div className="lg:col-span-8">
                <h2 className="text-8xl font-black uppercase tracking-tighter leading-none mb-6">Archive<br />Files</h2>
                <p className={`${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'} text-2xl font-medium max-w-xl`}>
                  Senior R&D prototypes across ground, marine, and automotive domains.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <div className={`px-8 py-5 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} text-xs mono font-bold uppercase tracking-widest shadow-2xl`}>
                  DATA_INTEGRITY: OPTIMAL
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className={`group flex flex-col h-full ${isDarkMode ? 'bg-white border-neutral-200' : 'bg-black border-neutral-800'} border overflow-hidden hover:border-yellow-400 transition-all duration-700 shadow-2xl hover:-translate-y-2`}>
                  <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&seed=${project.title}`} 
                      alt={project.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2000ms]"
                    />
                    <div className={`absolute top-8 left-8 px-4 py-1.5 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                      {project.subtitle}
                    </div>
                  </div>
                  
                  <div className="p-12 flex-grow flex flex-col gap-8 bg-[var(--bg-surface)]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-4xl font-black uppercase tracking-tight leading-none">{project.title}</h3>
                      <span className="text-xs mono font-black text-neutral-400">{project.period}</span>
                    </div>
                    
                    <p className={`${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'} text-xl leading-relaxed flex-grow`}>
                      {project.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-3 pt-10 border-t ${isDarkMode ? 'border-neutral-100' : 'border-neutral-900'}`}>
                      {project.tech?.map((t, i) => (
                        <span key={i} className={`px-4 py-1.5 ${isDarkMode ? 'bg-neutral-100 text-black border-neutral-200' : 'bg-neutral-800 text-white border-neutral-700'} text-[11px] mono font-bold border uppercase tracking-widest`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-40 px-6 lg:px-12 bg-[var(--bg-deep)] relative overflow-hidden scroll-mt-20">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
              <div className="space-y-2">
                <span className="text-yellow-500 mono font-bold text-xs tracking-widest uppercase">Knowledge Transfer</span>
                <h2 className="text-8xl font-black uppercase tracking-tighter">Research Log</h2>
              </div>
              <div className={`px-8 py-5 border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} text-xs mono font-black text-neutral-500 uppercase tracking-widest shadow-inner`}>
                Entries: {blogPosts.length}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {blogPosts.map((post: any, idx: number) => (
                <div key={idx} className={`group border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} p-12 hover:border-yellow-400 transition-all duration-500 bg-[var(--bg-surface)] flex flex-col h-full shadow-2xl relative overflow-hidden`}>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-yellow-400/10 transition-colors"></div>
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center gap-3 text-neutral-500 text-xs mono uppercase font-bold">
                        <Clock className="w-4 h-4 text-yellow-400" /> {post.date}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-yellow-400/5 flex items-center justify-center border border-yellow-400/20 group-hover:border-yellow-400 transition-all">
                        <MessageSquare className="w-5 h-5 text-yellow-400" />
                      </div>
                   </div>
                   <h3 className="text-3xl font-black uppercase tracking-tight mb-8 group-hover:text-yellow-400 transition-colors leading-tight">{post.title}</h3>
                   <p className="text-neutral-500 font-medium text-lg leading-relaxed mb-12 flex-grow">
                     {post.excerpt}
                   </p>
                   <div className="flex flex-wrap gap-3 mb-12">
                      {post.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[11px] mono font-black text-yellow-500 uppercase px-3 py-1 border border-yellow-400/10 bg-yellow-400/5">#{tag}</span>
                      ))}
                   </div>
                   <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-5 border ${isDarkMode ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'} group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 font-black text-xs mono uppercase tracking-widest transition-all text-center flex justify-center items-center gap-3 shadow-lg`}
                   >
                     READ_FULL_LOG
                     <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className={`py-40 px-6 lg:px-12 transition-theme ${isDarkMode ? 'bg-neutral-100 text-black' : 'bg-white text-black'} scroll-mt-20`}>
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-40 space-y-8">
              <h2 className="text-8xl md:text-[100px] font-black uppercase tracking-tighter leading-none text-outline">Academic<br />Formation</h2>
              <div className="flex justify-center gap-3">
                <div className="w-16 h-1.5 bg-yellow-400 shadow shadow-yellow-400/50"></div>
                <div className="w-6 h-1.5 bg-neutral-800"></div>
                <div className="w-6 h-1.5 bg-neutral-800"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-16">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className={`group border ${isDarkMode ? 'border-neutral-300 hover:border-black shadow-lg' : 'border-neutral-200 hover:border-yellow-400 shadow-xl'} p-16 transition-all duration-700 flex flex-col h-full bg-white relative overflow-hidden hover:-translate-y-2`}>
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Terminal className="w-32 h-32 text-black" />
                  </div>
                  <div className="text-yellow-500 mono font-black text-xs mb-10 tracking-widest uppercase">[{edu.period}]</div>
                  <h3 className="text-4xl font-black text-black mb-8 leading-none uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">{edu.degree}</h3>
                  <p className="text-neutral-500 text-xl font-medium mb-10 flex-grow leading-relaxed">{edu.institution}</p>
                  <div className={`space-y-6 pt-10 border-t border-neutral-100`}>
                    <div className="flex items-center gap-4 text-neutral-500 text-xs mono font-black uppercase tracking-widest">
                      <MapPin className="w-5 h-5 text-black" /> {edu.location}
                    </div>
                    {edu.score && (
                      <div className="flex items-center gap-4 text-black text-xs mono font-black uppercase tracking-widest">
                        <Radio className="w-5 h-5 text-yellow-500 animate-pulse" /> {edu.score}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className={`py-40 px-6 lg:px-12 transition-theme ${isDarkMode ? 'bg-black text-white' : 'bg-black text-white'} relative`}>
          <div className="caution-tape h-4 w-full absolute top-0 left-0"></div>
          
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 xl:col-span-8 space-y-16">
              <div className="space-y-6">
                <h2 className="text-8xl md:text-[100px] font-black uppercase tracking-tighter leading-none">Vidhun V<br />Warrier.</h2>
                <p className="text-neutral-400 text-3xl font-light leading-relaxed max-w-xl">
                  Deploying autonomous intelligence globally. Currently operational in Bengaluru, India.
                </p>
              </div>
              
              <div className={`space-y-8 pt-12 border-t border-neutral-800`}>
                <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`)}>
                  <div className={`w-20 h-20 bg-white text-black group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center transition-all shadow-2xl group-hover:rotate-12`}>
                    <Mail className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] mono font-black text-neutral-500 uppercase tracking-widest mb-1">Comm_Interface</span>
                    <span className="text-3xl font-black uppercase tracking-tight group-hover:text-yellow-400 transition-colors">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(PERSONAL_INFO.linkedin, '_blank')}>
                  <div className={`w-20 h-20 bg-white text-black group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center transition-all shadow-2xl group-hover:rotate-12`}>
                    <Linkedin className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] mono font-black text-neutral-500 uppercase tracking-widest mb-1">Social_Matrix</span>
                    <span className="text-3xl font-black uppercase tracking-tight group-hover:text-yellow-400 transition-colors">/vidhunvwarrier</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
              <div className={`p-16 border border-neutral-800 relative overflow-hidden group h-full flex flex-col justify-center bg-neutral-900 shadow-2xl shadow-black`}>
                <div className="absolute top-0 right-0 p-10">
                    <Box className="w-20 h-20 text-yellow-400/10 group-hover:text-yellow-400/20 transition-all group-hover:scale-110" />
                </div>
                <div className="space-y-8 relative z-10">
                    <h4 className="text-[11px] mono font-black text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-yellow-400" /> System Diagnostics
                    </h4>
                    <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between text-[11px] mono font-black uppercase tracking-widest">
                              <span className="text-neutral-400">Integration_Efficiency</span>
                              <span className="text-yellow-400">98%</span>
                          </div>
                          <div className={`h-1.5 bg-neutral-800 shadow-inner`}>
                              <div className="h-full bg-yellow-400 w-[98%] shadow-[0_0_12px_rgba(250,204,21,0.4)]"></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-[11px] mono font-black uppercase tracking-widest pt-2">
                              <span className="text-neutral-400">Field_Readiness</span>
                              <span className="text-yellow-400">100%</span>
                          </div>
                          <div className={`h-1.5 bg-neutral-800 shadow-inner`}>
                              <div className="h-full bg-yellow-400 w-full shadow-[0_0_12px_rgba(250,204,21,0.4)]"></div>
                          </div>
                        </div>
                    </div>
                    <div className="pt-12 text-center">
                        <button 
                          onClick={() => isLoggedIn ? setCurrentView('admin') : setCurrentView('login')}
                          className="text-[11px] mono font-black text-neutral-500 uppercase tracking-[0.4em] hover:text-yellow-400 transition-all cursor-pointer inline-flex items-center gap-2"
                        >
                           <Terminal className="w-3 h-3" /> ROBOTICS_CORE_V4_ONLINE
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`max-w-[1600px] mx-auto mt-40 pt-16 border-t border-neutral-800 text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] mono font-black uppercase tracking-[0.3em]`}>
            <p>© 2025 // Vidhun V Warrier // Mission_Briefing_v5.0</p>
            <div className="flex gap-12">
              <a href="#" className={`hover:text-yellow-500 transition-colors underline decoration-yellow-400/20`}>Core_Protocol</a>
              <a href="#" className={`hover:text-yellow-500 transition-colors underline decoration-yellow-400/20`}>Log_Archive</a>
              <a href="#" className={`hover:text-yellow-500 transition-colors underline decoration-yellow-400/20`}>System_Offline</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
