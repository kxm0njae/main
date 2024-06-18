// components/Stack.js

import { stack } from '@/data/config';
import TeammateProfile from './TeammateProfile';

export default function Stack() {
  return (
    <div className="overflow-x-hidden">
      <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
        {stack.title}
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {stack.members.map((member, index) => (
          <TeammateProfile
            key={index}
            name={member.name}
            photoUrl={member.photoUrl}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
}
