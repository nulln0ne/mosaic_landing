import { Twitter, MessageCircle, Linkedin, BotIcon } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contacts" className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Get in touch</h2>
        <div className="space-x-4 flex flex-row items-center justify-center">
          <div className="flex items-center justify-center space-x-1">
            <Twitter className="w-5 h-5 text-blue-700 fill-current" />
            <a
              href="https://x.com/mosaic_platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:text-blue-500 transition-colors"
            >
              X (old Twitter)
            </a>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <MessageCircle className="w-5 h-5 text-blue-700 fill-current" />
            <a
              href="https://t.me/mosaic_public_chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:text-blue-500 transition-colors "
            >
              Telegram Chat
            </a>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <Linkedin className="w-5 h-5 text-blue-700 fill-current" />
            <a
              href="https://www.linkedin.com/company/mosaic-freelance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:text-blue-500 transition-colors "
            >
              LinkedIn
            </a>
          </div>
          <div className='flex items-center justify-center space-x-1'>
            <BotIcon className='text-blue-700' />
            <a
              href="https://t.me/Mosaic_SupportBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:text-blue-500 transition-colors "
            >
              Support Bot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
