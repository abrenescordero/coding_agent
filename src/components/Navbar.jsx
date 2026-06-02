import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Asesor', href: '#asesor' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu when the user presses Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <nav
      aria-label="Menú principal"
      className="w-full bg-white border-b border-gray-200 relative"
    >
      <div className="max-w-[1126px] mx-auto px-4 h-16 flex items-center justify-between overflow-hidden">
        {/* Site brand */}
        <span className="font-semibold text-gray-800 text-lg shrink-0 mr-4">
          Mi Sitio
        </span>

        {/* Desktop nav items (≥ 768px) */}
        <ul
          className="hidden md:flex items-center gap-2 list-none m-0 p-0"
          role="list"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="
                  bg-fucsia-600 text-white
                  px-4 py-2 rounded
                  text-sm font-medium no-underline
                  transition-colors duration-200
                  hover:bg-fucsia-700
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-fucsia-600
                  focus-visible:ring-offset-2
                  focus-visible:bg-fucsia-700
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle button (< 768px) */}
        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="
            md:hidden
            p-2 rounded
            text-gray-600
            hover:text-gray-900 hover:bg-gray-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-fucsia-600
            focus-visible:ring-offset-1
            transition-colors duration-200
          "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel (< 768px) */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <ul className="flex flex-col gap-2 p-4 list-none m-0" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="
                    block text-center
                    bg-fucsia-600 text-white
                    px-4 py-3 rounded
                    text-sm font-medium no-underline
                    transition-colors duration-200
                    hover:bg-fucsia-700
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-fucsia-600
                    focus-visible:ring-offset-2
                    focus-visible:bg-fucsia-700
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
