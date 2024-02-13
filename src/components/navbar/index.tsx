const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-5 fixed w-full top-0 bg-main">
      <div className="text-2xl font-light text-second">Portfolio</div>
      <div className="flex flex-row gap-8">
        <a
          href="#home"
          className="hover:text-second hover:underline cursor-pointer"
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-second hover:underline cursor-pointer"
        >
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1WQwfSOBNunIgwv6KFlFTuGkAclM0Ol1i/view?usp=sharing"
          target="_blank"
          className="hover:text-second hover:underline cursor-pointer"
        >
          Resume
        </a>
      </div>
      <a
        href="https://wa.link/dx86en"
        target="_blank"
        className="bg-second text-white font-light rounded-full px-3 items-center flex text-md cursor-pointer shadow-lg shadow-second/50"
      >
        Say Hi!
      </a>
    </div>
  );
};

export default Navbar;
