'use client';

import React from 'react';

const buttonBaseClasses =
  'border-2 text-lg font-bold px-6 py-3 rounded-full relative overflow-hidden transition-all duration-300 ease-out border-primary text-primary group';

const sendClick = () => {
  fetch('https://api.mosaicsys.xyz/clicks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ responseId: 'abc123' }),
  })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
};

export default function ClientButton({ text, isTelegram }: { text: string; isTelegram?: boolean }) {
  return (
    <button onClick={sendClick} className={buttonBaseClasses}>
      <span className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out"></span>
      <span className="relative z-10 group-hover:text-secondary">
        {text}{' '}
        {isTelegram && (
          <span className="text-primary group-hover:text-[#27A8E9] transition-all duration-300 ease-out">
            Telegram
          </span>
        )}
      </span>
    </button>
  );
}
