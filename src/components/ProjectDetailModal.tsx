import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface TimelineMilestone {
  date: string;
  title: string;
  title_en: string;
}

interface Project {
  id: string;
  name: string;
  name_en?: string;
  location: string;
  location_en?: string;
  year_completed?: string;
  category?: string;
  image_url: string;
  description: string;
  description_en?: string;
  context_it?: string;
  context_en?: string;
  challenge_it?: string;
  challenge_en?: string;
  solution_it?: string;
  solution_en?: string;
  gallery_images?: string[];
  timeline?: {
    milestones: TimelineMilestone[];
  };
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const { language } = useLanguage();

  if (!project) return null;

  const projectName = language === 'en' && project.name_en ? project.name_en : project.name;
  const projectLocation = language === 'en' && project.location_en ? project.location_en : project.location;
  const projectDescription = language === 'en' && project.description_en ? project.description_en : project.description;
  const context = language === 'en' ? project.context_en : project.context_it;
  const challenge = language === 'en' ? project.challenge_en : project.challenge_it;
  const solution = language === 'en' ? project.solution_en : project.solution_it;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/90 hover:bg-white transition-colors shadow-lg"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>

                <div className="relative h-96 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={projectName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <h2 className="text-5xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {projectName}
                    </h2>
                    <div className="flex items-center space-x-6 text-lg">
                      <span className="font-semibold">{projectLocation}</span>
                      {project.year_completed && (
                        <>
                          <span className="text-white/60">•</span>
                          <span className="font-semibold">{project.year_completed}</span>
                        </>
                      )}
                      {project.category && (
                        <>
                          <span className="text-white/60">•</span>
                          <span className="text-sm tracking-wider uppercase">{project.category}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-10 lg:p-16 space-y-12">
                  <div>
                    <p className="text-2xl text-gray-700 leading-relaxed">
                      {projectDescription}
                    </p>
                  </div>

                  {context && (
                    <div className="border-l-4 border-[#1A1A1A] pl-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {language === 'en' ? 'Context' : 'Contesto'}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {context}
                      </p>
                    </div>
                  )}

                  {challenge && (
                    <div className="border-l-4 border-[#4682B4] pl-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {language === 'en' ? 'Challenge' : 'Sfida'}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  )}

                  {solution && (
                    <div className="border-l-4 border-emerald-500 pl-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {language === 'en' ? 'Solution' : 'Soluzione'}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  )}

                  {project.gallery_images && project.gallery_images.length > 0 && (
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {language === 'en' ? 'Gallery' : 'Galleria'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.gallery_images.map((img, index) => (
                          <div key={index} className="relative h-64 overflow-hidden group">
                            <img
                              src={img}
                              alt={`${projectName} ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.timeline && project.timeline.milestones && project.timeline.milestones.length > 0 && (
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Timeline
                      </h3>
                      <div className="space-y-6">
                        {project.timeline.milestones.map((milestone, index) => {
                          const title = language === 'en' ? milestone.title_en : milestone.title;
                          return (
                            <div key={index} className="flex items-start space-x-6">
                              <div className="flex items-center justify-center w-16 h-16 bg-[#1A1A1A] text-white flex-shrink-0">
                                <Calendar className="w-6 h-6" />
                              </div>
                              <div className="pt-2">
                                <p className="text-sm font-semibold text-gray-500 mb-1">{milestone.date}</p>
                                <p className="text-xl font-semibold text-gray-900">{title}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="pt-8 border-t-2 border-gray-200">
                    <Link
                      to="/contact"
                      state={{ project: projectName }}
                      onClick={onClose}
                      className="inline-flex items-center space-x-3 px-10 py-4 bg-[#1A1A1A] text-white hover:bg-[#4682B4] transition-all duration-300 font-semibold tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>{language === 'en' ? 'Request Information' : 'Richiedi Informazioni'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
