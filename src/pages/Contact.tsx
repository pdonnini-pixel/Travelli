import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Smartphone, Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useProjects, useSubmitContact, type ContactSubmission } from '../hooks/useProjects';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const { projects, loading: projectsLoading } = useProjects();
  const { submitContact, loading: submitting, success } = useSubmitContact();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request_type: '',
    project_id: '',
    message: '',
    budget_range: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const projectSlug = searchParams.get('project');
    if (projectSlug && projects.length > 0) {
      const project = projects.find(p => p.slug === projectSlug);
      if (project) {
        setFormData(prev => ({ ...prev, project_id: project.id }));
      }
    }
  }, [searchParams, projects]);

  const requestTypes = [
    { value: 'buy', label: language === 'en' ? 'I want to buy' : 'Voglio comprare casa' },
    { value: 'build', label: language === 'en' ? 'I want to build' : 'Voglio costruire' },
    { value: 'renovate', label: language === 'en' ? 'I want to renovate' : 'Voglio ristrutturare' },
    { value: 'other', label: language === 'en' ? 'Other' : 'Altro' },
  ];

  const budgetRanges = [
    { value: 'up_to_300k', label: language === 'en' ? 'Up to 300k' : 'Fino a 300k' },
    { value: '300k_500k', label: '300k-500k' },
    { value: '500k_1m', label: '500k-1M' },
    { value: 'over_1m', label: language === 'en' ? 'Over 1M' : 'Oltre 1M' },
    { value: 'prefer_not_say', label: language === 'en' ? 'Prefer not to say' : 'Preferisco non indicarlo' },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'Nome richiesto';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'Email richiesta';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email format' : 'Formato email non valido';
    }

    if (!formData.request_type) {
      newErrors.request_type = language === 'en' ? 'Request type is required' : 'Tipo richiesta richiesto';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'Messaggio richiesto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submission: ContactSubmission = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      request_type: formData.request_type,
      project_id: formData.project_id || undefined,
      message: formData.message.trim(),
      budget_range: formData.budget_range || undefined,
    };

    await submitContact(submission);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center"
        >
          <CheckCircle className="w-20 h-20 text-[#A68966] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'en' ? 'Thank You' : 'Grazie'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'en'
              ? 'We will get back to you within 24 hours.'
              : 'Ti ricontatteremo entro 24 ore.'}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-bronze-metallic bg-bronze-metallic-hover text-white px-8 py-4 transition-all duration-300"
          >
            <span className="tracking-wider uppercase text-sm">
              {language === 'en' ? 'Back to Home' : 'Torna alla Home'}
            </span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#252525] py-16 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {language === 'en' ? "Let's Talk About Your Project" : 'Parliamo del tuo progetto'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto"
          >
            {language === 'en'
              ? 'Whether you want to buy, build, or renovate, we are here to listen.'
              : 'Che si tratti di acquistare, costruire o ristrutturare, siamo qui per ascoltarti.'}
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === 'en' ? 'Contact Information' : 'Informazioni di Contatto'}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#A68966] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-lg">Via del Fornacione, 40</p>
                  <p className="text-white/90 text-lg">loc. Vallina, 50012</p>
                  <p className="text-white/90 text-lg">Bagno a Ripoli – Firenze</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#A68966] flex-shrink-0" />
                <a href="tel:0556802423" className="text-white/90 text-lg hover:text-[#A68966] transition-colors">
                  055 6802423
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Smartphone className="w-6 h-6 text-[#A68966] flex-shrink-0" />
                <a href="tel:3291294978" className="text-white/90 text-lg hover:text-[#A68966] transition-colors">
                  329 1294978
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#A68966] flex-shrink-0" />
                <a href="mailto:info@travellisrl.com" className="text-white/90 text-lg hover:text-[#A68966] transition-colors">
                  info@travellisrl.com
                </a>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8936!2d11.3476!3d43.7425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ0JzMzLjAiTiAxMcKwMjAnNTEuNCJF!5e0!3m2!1sen!2sit!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Name' : 'Nome'} *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors`}
                  placeholder={language === 'en' ? 'Your name' : 'Il tuo nome'}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors`}
                  placeholder="email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Phone' : 'Telefono'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="request_type" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Request Type' : 'Tipo Richiesta'} *
                </label>
                <select
                  id="request_type"
                  value={formData.request_type}
                  onChange={(e) => handleChange('request_type', e.target.value)}
                  className={`w-full bg-white/5 border ${errors.request_type ? 'border-red-500' : 'border-white/20'} text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors`}
                >
                  <option value="" className="bg-[#1A1A1A]">
                    {language === 'en' ? 'Select an option' : 'Seleziona un\'opzione'}
                  </option>
                  {requestTypes.map(type => (
                    <option key={type.value} value={type.value} className="bg-[#1A1A1A]">
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.request_type && <p className="text-red-500 text-sm mt-1">{errors.request_type}</p>}
              </div>

              <div>
                <label htmlFor="project_id" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Project of Interest' : 'Progetto di Interesse'}
                </label>
                <select
                  id="project_id"
                  value={formData.project_id}
                  onChange={(e) => handleChange('project_id', e.target.value)}
                  disabled={projectsLoading}
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors disabled:opacity-50"
                >
                  <option value="" className="bg-[#1A1A1A]">
                    {language === 'en' ? 'None selected' : 'Nessuno selezionato'}
                  </option>
                  {projects.map(project => (
                    <option key={project.id} value={project.id} className="bg-[#1A1A1A]">
                      {language === 'en' && project.name_en ? project.name_en : project.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget_range" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Indicative Budget' : 'Budget Indicativo'}
                </label>
                <select
                  id="budget_range"
                  value={formData.budget_range}
                  onChange={(e) => handleChange('budget_range', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors"
                >
                  <option value="" className="bg-[#1A1A1A]">
                    {language === 'en' ? 'Select an option' : 'Seleziona un\'opzione'}
                  </option>
                  {budgetRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-[#1A1A1A]">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 mb-2 text-sm font-medium">
                  {language === 'en' ? 'Message' : 'Messaggio'} *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={6}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white px-4 py-3 focus:outline-none focus:border-[#A68966] transition-colors resize-none`}
                  placeholder={language === 'en' ? 'Tell us about your project...' : 'Raccontaci del tuo progetto...'}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-bronze-metallic bg-bronze-metallic-hover text-white px-8 py-4 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="tracking-wider uppercase text-sm">
                      {language === 'en' ? 'Send Request' : 'Invia Richiesta'}
                    </span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
