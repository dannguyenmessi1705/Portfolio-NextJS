function Header({ feedElement }: { feedElement: (syntax: string) => void }) {
  const btns = [
    { name: "B", syntax: "**Bold**" },
    { name: "I", syntax: "*Italic*" },
    { name: "S", syntax: "~Strikethrough~" },
    { name: "H1", syntax: "# " },
  ];

  return (
    <header className="... flex bg-[#253237]">
      {btns.map((btn) => (
        <button
          key={btn.syntax}
          className="...rounded-md flex"
          onClick={() => feedElement(btn.syntax)}
        >
          {btn.name}
        </button>
      ))}
    </header>
  );
}

export default Header;
