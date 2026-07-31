import Link from "next/link"

interface HeaderProps {
  active?: string
}

export default function Header({ active }: HeaderProps) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Order", href: "/order" },
  ]

  return (
    <header className="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 rounded-t-lg">
      <div className="flex items-center flex-1">
        <div className="text-2xl font-bold text-gray-900">
          Sushi <span className="text-red-600">J</span> Express
        </div>
      </div>
      <ul className="flex items-center gap-6">
        {menus.map((menu) => (
          <li key={menu.href}>
            <Link
              href={menu.href}
              className={
                "text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold text-gray-900" : "")
              }
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
