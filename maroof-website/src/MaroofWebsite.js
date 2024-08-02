import React, { useState } from 'react';

const MaroofWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const roles = [
    "Blockchain Developer",
    "AI Engineer",
    "Full-Stack Developer",
    "Game Developer",
    "Animation and VFX Artist",
    "Product Manager",
    "Technical Content Creator",
    "Startup Founder/Entrepreneur"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#ebde17] text-gray-900'} flex flex-col items-center justify-center transition-colors duration-500 relative`}>
      {/* GIF Background */}
      {darkMode && (
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
             style={{ backgroundImage: 'url(https://media.giphy.com/media/xTk9ZZnCTvOofjpJ3a/giphy.gif)' }}>
        </div>
      )}
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <h2 className="text-2xl font-bold mb-2">Maroof Sultana C K</h2>
        <p className="mb-4">
          I'm a Bachelor of Computer Applications student at the University of Mysore,
          passionate about technology and constantly expanding my skills in various domains.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Who am I</h2>
        <ul className="list-none mb-8">
          {roles.map((role, index) => (
            <li key={index} className="mb-1">{role}</li>
          ))}
        </ul>
        <p className="mb-8">
          Best,<br />
          <span style={{ fontFamily: 'Dancing Script, cursive', fontSize: '24px' }}>Maroof</span>
        </p>
        <div className="space-x-4">
          <a href="mailto:maroof786m7@gmail.com" className="underline">Email</a>
          <a href="https://www.linkedin.com/in/maroof-sultana-c-k-786m777l/" className="underline">LinkedIn</a>
          <a href="https://sage.buildspace.so/@maroof-sultana-c-k-UerOxUu" className="underline">Sage</a>
          <button onClick={toggleDarkMode} className="underline mt-4">
            {darkMode ? 'light-mode.exe' : 'dark-mode.exe'}
          </button>
        </div>
      </div>
      <iframe
        width="0"
        height="0"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84118776&color=%2326f91c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        frameBorder="0"
        allow="autoplay"
        title="Hidden SoundCloud Audio"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default MaroofWebsite;
