import { Component } from "../util"

const CopyClick: Component<{
  text: string
  children: string
  styleAs?: "link" | "none"
  setClicked?: (clicked: boolean) => void
}> = ({ text, children, styleAs, setClicked }) => {
  styleAs ??= "none"
  return (
    <span
      className={`cursor-pointer ${styleAs === "link" ? "hover:text-gray-600 hover:dark:text-gray-400 transition duration-300" : ""}`}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setClicked?.(true)
      }}
    >
      {children}
    </span>
  )
}

export default CopyClick