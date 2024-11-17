// src/pages/Home.jsx
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const authors = [
    "Hezha MohammedKhan",
    "Cascha van Wanrooij",
    "Eric Postma",
    "Çiçek Güven",
    "Marleen Balvert",
    "Heersh Hmh Raof Saeed",
    "Chenar Omer Ali"
  ];

const TeamSection = () => {
    const teamMembers = [
        { name: "Hezha MohammedKhan", role: "Ph.D. Candidate", image: "/aran-website/images/hezha.jpeg", href: "https://www.tilburguniversity.edu/nl/medewerkers/h-h-mohammedkhan" },
        { name: "Cascha van Wanrooij", role: "MSc", image: "/aran-website/images/cascha.jpeg", href: "https://www.linkedin.com/in/caschavanwanrooij/" },
        { name: "Eric Postma", role: "Professor", image: "/aran-website/images/eric.jpeg", href: "https://www.tilburguniversity.edu/nl/medewerkers/e-o-postma" },
        { name: "Çiçek Güven", role: "Ph.D.", image: "/aran-website/images/cicek.jpeg", href: "https://www.tilburguniversity.edu/nl/medewerkers/c-guven" },
        { name: "Marleen Balvert", role: "Associate Professor", image: "/aran-website/images/marleen.jpeg", href: "https://www.tilburguniversity.edu/nl/medewerkers/m-balvert" },
        { name: "Heersh Hmh Raof Saeed", role: "Medical Doctor, Ph.D.", image: "/aran-website/images/heersh.jpeg", href: "https://www.researchgate.net/profile/Heersh-Saeed" },
        { name: "Chenar Omer Ali", role: "Medical Doctor, Ph.D.", image: "/aran-website/images/chenar.jpeg", href: "https://www.instagram.com/dr.chenar.pediatrics/" },

    ];
        
      return (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 px-4 sm:px-0">Team</h2>
              <div className="relative">
                {/* Scrollable container */}
                <div className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-0 snap-x snap-mandatory hide-scrollbar">
                  {teamMembers.map((member, index) => (
                    <a 
                      href={member.href}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={index}
                      className="flex-none group snap-center first:pl-0 last:pr-4"
                    >
                      <div className="w-[180px] sm:w-48">
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-[180px] h-[180px] sm:w-48 sm:h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <style>{`
                .hide-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </section>
          );
        };

const ResourceSection = () => {
    return (
        <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Resource</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paper */}
          <div className="flex flex-col">
            <h3 className="text-2xl text-blue-500 hover:text-blue-700 mb-4">
              <a href="#" className="hover:underline">Paper</a>
            </h3>
            <a href="#" className="block aspect-[4/5] overflow-hidden">
              <img 
                src="/aran-website/images/paper_page.jpeg" 
                alt="ARAN Paper" 
                className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>
  
          {/* Poster */}
          <div className="flex flex-col">
            <h3 className="text-2xl text-blue-500 hover:text-blue-700 mb-4">
              <a href="#" className="hover:underline">Poster</a>
            </h3>
            <a href="#" className="block aspect-[4/5] overflow-hidden">
              <img 
                src="/aran-website/images/paper_page.jpeg" 
                alt="ARAN Poster" 
                className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>
  
          {/* Presentation Video */}
          <div className="flex flex-col">
            <h3 className="text-2xl text-blue-500 hover:text-blue-700 mb-4">
              <a href="https://www.youtube.com/watch?v=HMNDoFDRigU" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Presentation video
              </a>
            </h3>
            <div className="aspect-[4/5] relative">
              {/* <iframe
                src="https://www.youtube.com/embed/HMNDoFDRigU"
                title="ARAN Presentation"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              /> */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <p className="text-xl text-gray-600">Content will arrive soon</p>
                <p className="text-sm text-gray-400">Video placeholder</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export const Home = () => {
const citation = `@article{mohammedkhan2024aran,
    title={ARAN: Age-restricted Anonymized Dataset of Children Images and Body Measurements},
    author={MohammedKhan, H. and van Wanrooij, C. and Postma, E. and Güven, Ç. and Balvert, M. and Saeed, H. H. R. and Ali, C. O.},
    journal={IEEE Access},
    year={2024}
}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
      ARAN: Age-restricted Anonymized Dataset of Children Images and Body Measurements
      </h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {authors.map((author, index) => (
          <span key={index} className="text-blue-600 hover:text-blue-800">
            {author}{index < authors.length - 1 ? "," : ""}
          </span>
        ))}
      </div>

      <div className="mb-12">
        <img 
          src="/aran-website/images/main_image.webp"
          alt="ARAN Dataset Example"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed">
        Precisely estimating a child’s body measurements and weight from a single image is useful in
pediatrics for monitoring growth and detecting early signs of malnutrition. The development of estimation
models for this task is hampered by the unavailability of a labeled image dataset to support supervised
learning. This paper introduces the ‘‘Age-Restricted ANonymized’’ (ARAN) dataset, the first labeled and
GDPR-approved image dataset of children with body measurements. The ARAN dataset consists of images
of 512 children aged 16 to 98 months, each captured from four different viewpoints, i.e., 2048 images in
total. The dataset includes each child’s height, weight, age, waist circumference, and head circumference
measurements, which is GDPR-approved because we used masks to cover the faces of the children. The
dataset is a solid foundation for developing prediction models for various tasks related to these measurements.
To create a suitable reference, we trained state-of-the-art deep learning algorithms on the ARAN dataset to
predict to predictrectly from the images. The best results are obtained by a DenseNet121 model achieving
competitive estimates for the body measurements, outperforming state-of-the-art results on similar tasks.
The ARAN dataset is developed as part of a collaboration to create a mobile App to measure children’s
growth and detect early signs of malnutrition contributing to the United Nations Sustainable Development
Goals.
        </p>
      </section>

      <TeamSection />


      <ResourceSection />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Citation</h2>
        <div className="relative">
          <CopyBlock
            text={citation}
            language="text"
            theme={dracula}
            showLineNumbers={false}
            codeBlock
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">
          For questions about the dataset, please contact us at:{" "}
          <a href="mailto:contact@aran-dataset.org" className="text-blue-600 hover:text-blue-800">
          h.h.mohammedkhan@tilburguniversity.edu
          </a>
        </p>
      </section>
    </div>
  );
};