import { ReactNode, useState } from "react"
import { Component } from "../util"
import AppearAnimation from "./AppearAnimation"

const Tooltip: Component<{
  text: string
  children: ReactNode
  animate?: boolean
  setHovered?: (hovered: boolean) => void
}> = ({ text, children, setHovered: externalSetHovered, animate = true }) => {
  const [hovered, setHovered] = useState(false)

  const tTip = <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 min-w-max bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 text-sm font-medium cursor-default select-none flex justify-center">
    {text}
  </div>

  return (
    <div className="relative" onMouseEnter={() => {
      setHovered(true)
      externalSetHovered?.(true)
    }} onMouseLeave={() => {
      setHovered(false)
      externalSetHovered?.(false)
    }}>
      {hovered && (
        animate ? (
          <AppearAnimation time={0.1} delay={0}>
            {tTip}
          </AppearAnimation>
        ) : (
          tTip
        )
      )}
      {children}
      
    </div>
  )
}

export default Tooltip