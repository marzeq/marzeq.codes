import { ReactNode, useState } from "react"

const Tooltip: Component<{
  text: string
  children: ReactNode
  setHovered?: (hovered: boolean) => void
}> = ({ text, children, setHovered: externalSetHovered}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => {
      setHovered(true)
      externalSetHovered?.(true)
    }} onMouseLeave={() => {
      setHovered(false)
      externalSetHovered?.(false)
    }}>
      {hovered &&
        <div className="absolute bottom-full left-1/2 translate-y-1 transform -translate-x-1/2 w-screen flex justify-center p-2">
          <div className="drop-shadow-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded text-sm font-medium cursor-default select-none flex justify-center">
            {text}
          </div>
        </div>}
      {children}
      
    </div>
  )
}

export default Tooltip