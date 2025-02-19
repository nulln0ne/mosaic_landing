"use client"

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

export default function GoToApp() {
  return (
    <div className="flex items-center justify-center py-36">
      <button
        onClick={() => sendClick()}
        className="text-lg text-blue-700 cursor-pointer border-2 py-2 px-4  border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
      >
        Open in Telegram
      </button>
    </div >
  )
}