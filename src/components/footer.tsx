const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 my-2">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Amrendram&apos; Technical Blog. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-500">♥</span> and a lot of Coffee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
