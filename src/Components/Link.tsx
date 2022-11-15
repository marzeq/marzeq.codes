import { ReactNode } from "react"
import { Component } from "../util"

const Link: Component<{
  href: string
  children: ReactNode
}> = ({ href, children }) => {
  return <a href={href} target="_blank" rel="noreferrer" className="hover:text-gray-600 hover:dark:text-gray-400 transition duration-300">{children}</a>
}

export default Link