import React from 'react';
import ProfileCheck from '@/components/icons/ProfileCheck';

export default function SectionHeadingTest() {
  return (
    <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white justify-center	">
      <ProfileCheck className="size-8" />
      Sobre mí
    </h2>
  );
}
