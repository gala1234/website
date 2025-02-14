'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      className="relative mb-6 h-48 w-48 flex-shrink-0 md:mb-0"
      initial={{ opacity: 0.6, scale: 0.5 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient p-1">
        <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-black">
          <Image
            src="/gala-profile.jpeg"
            alt="Gala's profile picture"
            width={192}
            height={192}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
