const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 my-2">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Amrendram. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-500">♥</span> using React and
          Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
