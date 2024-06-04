type Category = "frontend" | "backend" | "others";
export function NavbarItem({
  value,
  handleFilterCategory,
  active,
}: {
  value: Category | "all";
  handleFilterCategory: Function;
  active: Category | "all";
}) {
  return (
    <li
      className={`cursor-pointer capitalize hover:text-accent-600 xl:mx-3 ${
        active === value && "border-b-2 border-accent-600 text-accent-600"
      }`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
}

export default function NavbarProject({
  handleFilterCategory,
  active,
}: {
  handleFilterCategory: Function;
  active: Category | "all";
}) {
  return (
    <nav className="flex list-none justify-center gap-4 overflow-x-auto px-3 py-2">
        <NavbarItem
          value="all"
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <NavbarItem
          value="frontend"
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <NavbarItem
          value="backend"
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <NavbarItem
          value="others"
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
    </nav>
  );
}
