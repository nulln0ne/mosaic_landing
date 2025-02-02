import { DynaPuff } from 'next/font/google';
import { Playwrite_US_Trad } from 'next/font/google';
import { Silkscreen } from 'next/font/google';

const dynaPuff = DynaPuff({ subsets: ['latin'] });
const silkScreen = Silkscreen({ weight: '700', subsets: ['latin'] });
const playwriteUSTrad = Playwrite_US_Trad({});

const buttonBaseClasses = 'border-2 text-lg font-bold px-6 py-3 rounded-full relative overflow-hidden';

const titleClasses = 'font-black text-center text-[clamp(2rem,5vw,5rem)] text-primary';

export default function Introduction() {
  return (
    <section className="w-full my-24 ">
      <div className={titleClasses}>
        <span className={`hover:text-indigo-500 ${playwriteUSTrad.className} letter-hover`}>
          Revolutionize
        </span>
        <br />
        <span className={`hover:text-red-500 ${dynaPuff.className} letter-hover`}>
          the way you work
        </span>
        <span className={`hover:text-orange-500`}> & </span>
        <span className={`hover:text-pink-500`}>bring </span>
        <br />
        <span className={`hover:text-green-500 ${silkScreen.className} letter-hover`}>
          transparency
        </span>
        <span className={`hover:text-indigo-500 ${playwriteUSTrad.className} letter-hover`}>
          to <span className="underline">every</span> deal
        </span>
      </div>

      <div className="flex justify-center gap-10 mt-12">
        <button className={`${buttonBaseClasses} border-primary text-primary group`}>
          <span className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out"></span>
          <span className="relative group-hover:text-secondary transition-all duration-300 ease-out">Explore Web App</span>
        </button>
        <button className={`${buttonBaseClasses} border-primary text-primary group`}>
          <span className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out"></span>
          <span className="relative group-hover:text-secondary transition-all duration-300 ease-out">
            Open in{' '}
            <span className="text-primary group-hover:text-[#27A8E9] transition-all duration-300 ease-out">
              Telegram
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}

