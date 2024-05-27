type Category = "frontend" | "backend" | "fullstack";
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
      className={`cursor-pointer hover:text-accent-600 capitalize ${
        active === value && "text-accent-600 border-b-2 border-accent-600"
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
    <div className="flex justify-center gap-4 px-3 py-2 overflow-x-auto list-none">
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
        value="fullstack"
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
    </div>
  );
}
