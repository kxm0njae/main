// components/TeammateProfile.js

import Image from 'next/image';

export default function TeammateProfile({ name, photoUrl, github }) {
  return (
    <div className="border border-lightText rounded-lg p-6 flex flex-col items-center space-y-2">
      <div className="relative w-20 h-20 rounded-full overflow-hidden">
        <Image src={photoUrl} layout="fill" objectFit="cover" alt={name} />
      </div>
      <div className="pt-2"></div>
      <h3 className="text-lg font-bold text-center">{name}</h3>
      <div className="flex items-center space-x-2">
        {github && (
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/static/icons/github.svg"
              width={18}
              height={18}
              alt="GitHub icon"
            />
            <span className="ml-1 text-sm">{github}</span>
          </a>
        )}
      </div>
    </div>
  );
}
