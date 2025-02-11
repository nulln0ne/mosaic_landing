import Image from 'next/image';
import iPhone_Main from '../../assets/main.png';
import iPhone_Task from '../../assets/task.png';

const featuresApp = [
  {
    id: 1,
    description: 'Find a performer for a task or find a task for yourself 🔎',
    status: 'available',
    bgColor: '#000',
  },
  {
    id: 2,
    description: 'To register, you only need a TON wallet 💰',
    status: 'available',
    bgColor: '#000',
  },
  {
    id: 3,
    description: 'Pay with $TON or $USDT 🤑',
    status: 'available',
    bgColor: '#000',
  },

  {
    id: 4,
    description: 'Security is ensured by smart contracts 🛡️',
    status: 'available',
    bgColor: '#000',
  },
  {
    id: 5,
    description: 'AI assistant at different stages of your work 🤖',
    status: 'unavailable',
    bgColor: '#E0E0E0',
  },
  {
    id: 6,
    description: 'Tokenize your experience 🎓',
    status: 'unavailable',
    bgColor: '#E0E0E0',
  },
];

interface Feature {
  id: number;
  description: string;
  status: string;
  bgColor: string;
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className={`px-6 py-8 rounded-2xl w-[400px] text-2xl relative flex items-center ${feature.status === 'available' ? 'text-white' : 'text-gray-500'
        }`}
      style={{ backgroundColor: feature.bgColor }}
    >
      <p>{feature.description}</p>
      {feature.status === 'unavailable' && (
        <div className="absolute bottom-2 right-2 transform  bg-[#aaa] text-white py-1 px-4 rounded-full text-sm">
          Soon
        </div>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section className="w-full pb-24">
      <div className="flex flex-row items-center justify-center gap-12 px-10">
        <div className="w-full max-w-[500px] min-w-[200px] flex-grow">
          <Image src={iPhone_Main} alt="screenshot of main page" layout="responsive" />
          {/* <Image src={iPhone_Task} alt="screenshot of task page" layout="responsive" /> */}
        </div>

        <div className="flex flex-col gap-4 relative">
          {featuresApp.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
