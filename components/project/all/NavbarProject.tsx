type Category = "all" | "frontend" | "backend" | "fullstack";
export default function NavbarItem({ value }: { value: Category }) {
  return <li>{value}</li>;
}

function NavbarProject() {
  return (
    <div className="flex justify-center gap-4">
      <NavbarItem value="all" />
      <NavbarItem value="frontend" />
      <NavbarItem value="backend" />
      <NavbarItem value="fullstack" />
    </div>
  );
}
