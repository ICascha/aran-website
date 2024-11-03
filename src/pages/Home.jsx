// src/pages/Home.jsx
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const authors = [
  "Hezha MohammedKhan",
  "Jane Doe",
  "Robert Johnson",
  "Maria Garcia",
  "David Chen"
];

const TeamSection = () => {
    const teamMembers = [
        { name: "Hezha MohammedKhan", role: "Ph.D. Candidate", image: "/aran-website/images/hezha.jpeg" },
        { name: "Jane Doe", role: "Example", image: "/api/placeholder/200/200" },
        { name: "Robert Johnson", role: "Example", image: "/api/placeholder/200/200" },
        { name: "Maria Garcia", role: "Example", image: "/api/placeholder/200/200" },
        { name: "David Chen", role: "Example", image: "/api/placeholder/200/200" }
      ];
        
      return (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 px-4 sm:px-0">Team</h2>
              <div className="relative">
                {/* Scrollable container */}
                <div className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-0 snap-x snap-mandatory hide-scrollbar">
                  {teamMembers.map((member, index) => (
                    <a 
                      href="https://google.com" 
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-normal text-gray-600 mb-8">Resource:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paper */}
          <div className="flex flex-col">
            <h3 className="text-2xl text-blue-500 hover:text-blue-700 mb-4">
              <a href="#" className="hover:underline">Paper</a>
            </h3>
            <a href="#" className="block aspect-[4/5] overflow-hidden">
              <img 
                src="/aran-website/images/paper.jpeg" 
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
                src="/aran-website/images/poster.jpeg" 
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
              <iframe
                src="https://www.youtube.com/embed/HMNDoFDRigU"
                title="ARAN Presentation"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

export const Home = () => {
  const citation = `@article{smith2024aran,
  title={ARAN: Age-restricted anonymized dataset of children images and body
    measurements},
  author={Smith, J. and Doe, J. and Johnson, R. and Garcia, M. and Chen, D.},
  journal={Proceedings of Computer Vision and Pattern Recognition},
  year={2024}
}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        ARAN: Advanced Recognition and Analysis Network
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
        Precisely estimating a child's height and weight from a single image can be useful in the pediatrics domain for determining the dose of medication, detecting early signs of malnutrition, and monitoring growth. However, it remains a challenging task, especially without a comprehensive dataset for model training. In this paper, we contribute to the relatively unexplored field of directly predicting children's body measurements from 2D images. We introduce the ``Age-Restricted ANonymized (ARAN) dataset'', the first labeled image dataset of children with body measurements. The ARAN dataset consists of images of 512 children aged 16 to 98 months, each captured from four different angles, i.e., 2048 images in total. The dataset includes height, weight, age, waist circumference, and head circumference measurements for each child. The dataset is a solid foundation for developing prediction models for various tasks related to these measurements. We performed experiments with the ARAN dataset by training state-of-the-art deep learning algorithms on the task of predicting the measurement values directly from the images. The best results are obtained by a DenseNet121 model achieving a Mean Absolute Error (MAE) of ± 2.5 cm and ± 1.6 kg in estimating height and weight, respectively. The results surpass the linear baseline benchmark across all four measurements and outperform state-of-the-art results from similar papers.
        </p>
      </section>

      <TeamSection />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Video</h2>
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/56NNY32C2Kg"
          allowFullScreen
        />
      </section>

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
            contact@aran-dataset.org
          </a>
        </p>
      </section>
    </div>
  );
};