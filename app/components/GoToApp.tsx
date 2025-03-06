"use client"


export default function GoToApp() {
  const sendClick = () => {
    fetch('https://api.mosaicsys.xyz/clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ responseId: 'abc123' }),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
    window.open('https://app.mosaicsys.xyz/')
  };
  return (
    <div className="flex items-center justify-center py-36 bg-green-300 flex-col gap-4">
      <h3 className="text-3xl text-green-700 font-bold">Want to make a deal securely <br />and without any limitations?</h3>
      <button
        onClick={() => sendClick()}
        className="text-lg text-white bg-green-600 cursor-pointer border-2 border-green-600 py-2 px-4 rounded-full font-bold hover:bg-green-700 transition-all duration-300"
      >
        Open Web App
      </button>
    </div >
  )
}