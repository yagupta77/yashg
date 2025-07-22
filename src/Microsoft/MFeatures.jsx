import React from "react";
import { Mail, FileText, Calendar, Video, Shield, Cloud } from 'lucide-react';


export default function MFeatures() {
  const features = [
    {
      icon: <Mail className="w-10 h-10 text-green-600" />,
      title: "Advanced Email Management",
      description: "Professional email hosting with advanced security, spam protection, and seamless integration across all devices."
    },
    {
      icon: <FileText className="w-10 h-10 text-green-600" />,
      title: "Real-time Document Collaboration",
      description: "Create, edit, and share documents simultaneously with your team using Word, Excel, and PowerPoint online."
    },
    {
      icon: <Calendar className="w-10 h-10 text-green-600" />,
      title: "Intelligent Calendar Scheduling",
      description: "Smart scheduling with automated meeting coordination, room booking, and seamless calendar sharing capabilities."
    },
    {
      icon: <Video className="w-10 h-10 text-green-600" />,
      title: "HD Video Conferencing",
      description: "Host professional meetings with crystal-clear video, screen sharing, and recording features for up to 300 participants."
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: "Enterprise-Grade Security",
      description: "Advanced threat protection, data encryption, and compliance tools to keep your business data safe and secure."
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-600" />,
      title: "Cloud Storage & Backup",
      description: "1TB+ of secure cloud storage per user with automatic backup, file versioning, and anywhere access to your files."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
            Microsoft 365 Features
          </h2>
          <p className="text-[18px] text-[#0e3c47ca] max-w-2xl mx-auto">
            Everything you need to build and grow your website with confidence, backed by enterprise-grade infrastructure.
            "Fast, affordable & fully optimized shared hosting for growing websites."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-200 hover:bg-white border border-slate-200 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-sky-200/60 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0e3c47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#0e3c47cf] text-[18px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section> 
  );
}