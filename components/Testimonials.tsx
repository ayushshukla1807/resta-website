import React from 'react';
import { Star, Quote, Award, GraduationCap, Briefcase } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Professor, IIT Delhi',
      content: 'StudyHub has revolutionized how students access quality education. The AI-powered semantic search and automated summaries have significantly improved learning outcomes across our department.',
      rating: 5,
      achievement: 'Education Innovator',
    },
    {
      id: 2,
      name: 'Rohan Kumar',
      role: 'Software Engineer, Google',
      content: 'The DSA and system design materials from StudyHub were instrumental in helping me crack my FAANG interviews. The RAG-powered study assistant is a game changer!',
      rating: 5,
      achievement: 'FAANG Placement',
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'ML Engineer, Microsoft',
      content: 'As someone preparing for ML roles, the intelligence engine that auto-summarizes papers and provides contextual search results is incredibly useful. Best academic platform I have used.',
      rating: 5,
      achievement: 'Top Contributor',
    }
  ];

  const stats = [
    { icon: <GraduationCap className="w-6 h-6" />, value: '50,000+', label: 'Students Empowered' },
    { icon: <Award className="w-6 h-6" />, value: '4.9/5', label: 'Average Rating' },
    { icon: <Briefcase className="w-6 h-6" />, value: '5,000+', label: 'Career Success Stories' },
    { icon: <Star className="w-6 h-6" />, value: '120+', label: 'Countries Reached' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-space-grotesk mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students and professionals who have transformed their careers with StudyHub
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-green-500 mb-3 mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="premium-card glass rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-500 group"
            >
              <Quote className="w-8 h-8 text-green-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Award className="w-3 h-3 text-yellow-500" />
                    <span className="text-yellow-400 text-xs">{testimonial.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Learning Journey?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join StudyHub today and access the world&apos;s largest collection of free, AI-enhanced educational resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Learning Now
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
                Explore All Materials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;