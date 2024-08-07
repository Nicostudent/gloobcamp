import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-white font-bold text-center md:text-left ml-3 text-lg gap-3 mb-4 md:mb-0"
        >
          <Image src="/icon.svg" alt="Logo" width={30} height={30} />
          Gloobcamp
        </Link>
        <div className="flex space-x-4">
          <Link href="/aboutus" className="hover:text-white">
            About
          </Link>
          <Link href="/" className="hover:text-white">
            Newsletter
          </Link>
          <Link href="/contact-us" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;