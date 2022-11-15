import { ReactNode } from "react"
import { Component } from "../util"
import Keyframes from "./Keyframes"

const AppearAnimation: Component<{
  children: ReactNode
  delay?: number
  time?: number
}> = ({ children, delay = 0, time = 0.25 }) => {
  return (<>
  <Keyframes name="appear" from={{ opacity: 0, transform: "scale(0.9)" }} to={{ opacity: 1, transform: "scale(1)" }} />
    <div style={{
      animation: `appear ${time}s ease-in-out ${delay}ms forwards`
    }}>
      {children}
    </div>
    </>)
}

export default AppearAnimation