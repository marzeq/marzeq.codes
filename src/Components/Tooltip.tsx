import { ReactNode, useState } from "react"
import { Component } from "../util"

const Tooltip: Component<{
  text: string
  children: ReactNode
}> = ({ text, children }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered && (
        // center the tooltip
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 text-sm font-medium cursor-default select-none flex justify-center">
          {text}
        </div>
      )}
      {children}
      
    </div>
  )
}

export default Tooltip