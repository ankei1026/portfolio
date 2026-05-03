import { Link } from "react-router";

export default function Header() {
  const navItems = [
    { name: "About Me", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stacks", href: "#tech-stacks" },
  ];

  return (
    <header className="sticky top-0 z-10 bg-black p-4 border-b border-white ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-gray-300 text-2xl font-bold">Errol.</h1>
        <nav className="text-gray-300">
          <ul className="flex justify-center items-center gap-x-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:cursor-pointer hover:text-gray-100"
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
