import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
