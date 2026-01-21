import React from 'react';

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company,
  avatar,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col ${className}`}>
      <div className="mb-6 grow">
        <svg 
          className="w-10 h-10 text-navy-400 mb-4" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic">
          "{quote}"
        </p>
      </div>
      <div className="flex items-center mt-auto">
        {avatar && (
          <div className="w-12 h-12 rounded-full bg-navy-200 mr-4 flex items-center justify-center">
            {avatar.includes('http') ? (
              <img src={avatar} alt={author} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-navy-800 font-bold text-lg">
                {author.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        )}
        <div>
          <p className="font-semibold text-navy-900">{author}</p>
          <p className="text-sm text-gray-600">
            {role}{company && ` at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
