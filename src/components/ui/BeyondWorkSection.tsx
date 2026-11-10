import React from 'react';
import { ArrowUpRight, Users, Compass } from 'lucide-react';

interface LifeMoment {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
}

const MomentCard: React.FC<{ moment?: LifeMoment; aspect?: string }> = ({ moment, aspect = 'aspect-[4/3]' }) => {
  if (!moment) return null;
  return (
    <div className="rounded-3xl p-2 bg-[#ffffff] border-2 border-[#e7e0d8] shadow-lg hover:shadow-xl hover:border-[#1c1917] transition-all duration-300 group">
      <div className={`w-full ${aspect} rounded-2xl overflow-hidden`}>
        <img
          src={moment.imageUrl}
          alt={moment.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <div className="mt-2 px-2 pb-1 text-center">
        <p className="font-serif italic text-sm text-[#1c1917]">{moment.title}</p>
        <p className="font-sans text-xs text-[#d9654c] font-medium">{moment.category}</p>
      </div>
    </div>
  );
};

export const BeyondWorkSection: React.FC = () => {
  const moments: LifeMoment[] = [
    {
      id: 1,
      title: 'Bangalore 10K Run',
      category: 'Endurance',
      location: 'Kanteerava Stadium',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      title: 'Architecture Deep-Dive',
      category: 'Pairing',
      location: 'Bangalore Tech Hub',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Dev Summit Mentorship',
      category: 'Community',
      location: 'UiPath Auditorium',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Smart India Hackathon',
      category: 'National Award',
      location: 'Goldman Sachs Podium',
      year: '2019',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Casual Problem-Solving',
      category: 'Exploration',
      location: 'Cafe Roastery BLR',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Keynote & Panel',
      category: 'Speaker',
      location: 'Frontend Days BLR',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="beyond-work"
      className="relative py-32 md:py-44 px-6 md:px-12 bg-[#faf6f0] border-t border-[#e7e0d8] overflow-hidden"
    >
      {/* Background soft ambient tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f5dfd5]/35 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e3ebe0]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow tag */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#1c1917] bg-[#ffffff] backdrop-blur-sm text-xs font-sans text-[#78716c] shadow-lg">
            <Compass size={13} className="text-[#d9654c]" />
            <span>Beyond The Editor</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column - 2 photos */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <MomentCard moment={moments[0]} aspect="aspect-[3/4]" />
            <MomentCard moment={moments[1]} aspect="aspect-[4/3]" />
          </div>

          {/* Center Column - Typography */}
          <div className="lg:col-span-6 text-center py-12 lg:py-0">
            <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-normal text-[#1c1917] leading-[0.9] tracking-tight mb-8">
              Beyond
              <br />
              <span className="italic font-light text-[#d9654c]">work</span>
            </h2>

            <div className="inline-block max-w-xl mx-auto px-6 py-4 rounded-2xl bg-[#faf6f0]/95 backdrop-blur-md border border-[#e7e0d8] shadow-lg mb-10">
              <p className="text-base sm:text-lg text-[#1c1917] font-sans font-normal leading-relaxed">
                Always moving, rarely standing still. National hackathon podiums, mentoring next-gen automation engineers,
                exploring modern web standards, and endurance 10Ks in between.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#about"
                className="studio-btn w-full sm:w-auto px-8 py-4 rounded-full bg-[#1c1917] text-[#faf6f0] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-[#d9654c] shadow-lg group"
              >
                <span className="whitespace-nowrap">Read My Journey</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <a
                href="#contact"
                className="studio-btn studio-btn-outline w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#1c1917] bg-[#ffffff] text-[#1c1917] text-xs font-sans font-semibold tracking-wider uppercase hover:border-[#d9654c] hover:bg-[#d9654c] hover:text-[#faf6f0] shadow-lg group"
              >
                <Users size={15} className="text-[#d9654c] group-hover:text-[#faf6f0] shrink-0" />
                <span className="whitespace-nowrap">Connect & Jam</span>
                <ArrowUpRight size={13} className="text-[#78716c] group-hover:text-[#faf6f0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column - 2 photos */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <MomentCard moment={moments[2]} aspect="aspect-[4/3]" />
            <MomentCard moment={moments[3]} aspect="aspect-[3/4]" />
          </div>
        </div>

        {/* Bottom Row - 2 more photos centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          <MomentCard moment={moments[4]} aspect="aspect-[4/3]" />
          <MomentCard moment={moments[5]} aspect="aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
};
