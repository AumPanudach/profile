import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <div>
      <h2>About Me</h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I am a web developer with experience in Next.js and shadcn/ui. I enjoy creating interactive and dynamic user interfaces with animations to enhance the user experience.
      </motion.p>
    </div>
  );
};

export default Profile;
