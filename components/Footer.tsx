import Link from "next/link"
import { Github } from "lucide-react"
import { isSushiOpenPhrase } from "@/utils/mod"

interface FooterProps {
  children?: React.ReactNode
  active?: string
  hits?: number
}

export default function Footer({ children, active, hits = 0 }: FooterProps) {
  const menus = [
    {
      title: "Pages",
      children: [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Facebook", href: "https://www.facebook.com/SushiJExpress/" },
      ],
    },
  ]

  return (
    <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm mb-5 rounded-b-lg">
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <div className="font-bold text-2xl text-gray-900">
            Sushi <span className="text-red-600">J</span> Express
          </div>
        </div>
        <div>
          <a
            href="https://goo.gl/maps/V5GUNWqMwZ6JSoa98"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location & Directions
          </a>
        </div>
        <div>
          <a href="tel:+19287759323">(928) 775-9323</a>
        </div>
        <div className="mt-1 font-medium text-gray-700">
          {isSushiOpenPhrase()}
        </div>
      </div>

      {menus.map((item) => (
        <div className="mb-4" key={item.title}>
          <div className="font-bold text-gray-900">{item.title}</div>
          <ul className="mt-2">
            {item.children.map((child) => (
              <li className="mt-2" key={child.name}>
                {child.href.startsWith("http") ? (
                  <a href={child.href} target="_blank" rel="noopener noreferrer">
                    {child.name}
                  </a>
                ) : (
                  <Link
                    href={child.href}
                    className={child.href === active ? "font-bold text-gray-900" : ""}
                  >
                    {child.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="space-y-2">
        <div className="text-xs text-gray-600">
          Copyright © Sushi J Express<br />
          <a href="https://hyprtxt.dev" target="_blank" rel="noopener noreferrer">
            Coded in Prescott Valley
          </a>.
        </div>
        <a
          href="https://github.com/Hyprtxt/sushij.express"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:text-black text-gray-700"
          aria-label="Github Icon"
        >
          <Github className="w-5 h-5" />
        </a>
        {hits > 0 ? <p className="text-xs text-gray-500">Hits: {hits}</p> : null}
      </div>
      {children}
    </div>
  )
}
