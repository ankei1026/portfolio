export default function Header() {
  return (
    <header className="w-full dark:text-white flex justify-center items-center">
      <nav className="flex items-center justify-between p-6 max-w-300 w-full">
        <div className="font-quicksand">Errol.</div>
        <div className="flex items-end justify-end gap-3 font-lora">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
}
