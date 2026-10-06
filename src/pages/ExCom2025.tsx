import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const ExCom2025 = () => {
  const teamMembers = [
    {
      "name": "Bhragava Charan",
      "position": "President",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/Bhargava_charan.png"
    },
    {
      "name": "ASHIK",
      "position": "Vice-President",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/G.ASHIK.png"
    },
    {
      "name": "ShivaSai",
      "position": "Secretary",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/ShivaSai.png"
    },
    {
      "name": "Sriram",
      "position": "Technical Lead",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/Sriram.png"
    },
    {
      "name": "Akshay",
      "position": "Project Lead",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/Akshay.png"
    },
    {
      "name": "Keerthana",
      "position": "Design Lead",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/Keerthana.png"
    },
    {
      "name": "Bhumika Macharla",
      "position": "Documentation Lead",
      "bio": "",
      "email": "",
      "linkedin": "",
      "image": "/Team/Bhumika_Macharla.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-academic hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="h-12 w-12 text-secondary mr-4" />
              <h1 className="text-4xl lg:text-6xl font-bold">Ex-Com 2025-26</h1>
            </div>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Meet the executive committee leading our club through 2025-26
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-academic bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Executive Committee Members
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-academic text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-secondary/20 mb-6"
                />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExCom2025;