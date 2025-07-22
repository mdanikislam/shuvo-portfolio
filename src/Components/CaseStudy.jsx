import React, { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Website",
    subtitle: "A modern shopping experience",
    description:
      "Built a responsive e-commerce platform with product filters, cart functionality, and Stripe integration. Improved loading speed by 45%.",
    image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
    tools: ["React", "TailwindCSS", "Stripe", "Firebase"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    subtitle: "Personal branding site",
    description:
      "Designed and developed a dynamic portfolio to showcase work and skills. Integrated animation and responsive design.",
    image: "https://i.ytimg.com/vi/Clll-ZcI2RY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIKzRlddg3F10GXMTOZUpGjSN5Ww",
    tools: ["React", "Framer Motion", "DaisyUI"],
  },
];

const CaseStudy = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
     <section className="px-4 md:px-12 py-10 bg-base-200 min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Case Studies</h2>

      <div className="grid gap-10">
        {caseStudies.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure className="w-full lg:w-1/2">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="object-cover w-full h-64 md:h-full"
              />
            </figure>
            <div className="card-body w-full lg:w-1/2">
              <h3 className="card-title text-2xl">{caseItem.title}</h3>
              <p className="text-md text-gray-500">{caseItem.subtitle}</p>
              <p className="mt-2">{caseItem.description}</p>
              <div className="mt-2">
                <strong>Tools:</strong>{" "}
                <div className="flex flex-wrap gap-2 mt-1">
                  {caseItem.tools.map((tool, i) => (
                    <span key={i} className="badge badge-outline badge-primary">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">View Project</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudy