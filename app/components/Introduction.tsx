import { DynaPuff } from 'next/font/google';
import { Playwrite_US_Trad } from 'next/font/google';
import { Silkscreen } from 'next/font/google';
import ClientButton from './Button'; // Import the Client Component

const dynaPuff = DynaPuff({ subsets: ['latin'] });
const silkScreen = Silkscreen({ weight: '700', subsets: ['latin'] });
const playwriteUSTrad = Playwrite_US_Trad({});

const titleClasses =
  'font-black text-center text-[clamp(2rem,5vw,5rem)] text-primary leading-tight';

export default function Introduction() {
  return (
    <section className="w-full my-24">
      <div className={titleClasses}>
        <span className={`hover:text-indigo-500 ${playwriteUSTrad.className} letter-hover`}>
          Revolutionize
        </span>
        <br />
        <span className={`hover:text-red-500 ${dynaPuff.className} letter-hover`}>
          the way you work
        </span>
        <span className="hover:text-orange-500"> & </span>
        <span className="hover:text-pink-500">bring </span>
        <br />
        <span className={`hover:text-green-500 ${silkScreen.className} letter-hover`}>
          transparency
        </span>
        <span className={`hover:text-indigo-500 ${playwriteUSTrad.className} letter-hover`}>
          to <span className="underline">every</span> deal
        </span>
      </div>

      <div className="flex justify-center gap-10 mt-12">
        <ClientButton text="Explore Web App" />
        <ClientButton text="Open in" isTelegram />
      </div>
    </section>
  );
}
