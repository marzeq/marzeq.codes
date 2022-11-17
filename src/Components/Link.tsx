import { ReactNode } from "react"
import { Component } from "../util"

const Link: Component<{
  href: string
  notBlank?: boolean
  children: ReactNode
}> = ({ href, children, notBlank }) => {
  return <a href={href} target={!notBlank ? "_blank" : undefined} rel="noreferrer" className="hover:text-gray-600 hover:dark:text-gray-400 transition duration-300">{children}</a>
}

export default Link