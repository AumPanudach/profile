import React from 'react';
import { skillsByCategory } from '../app/page';

const Skills = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto px-4">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;