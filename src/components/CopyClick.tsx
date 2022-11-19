import Tooltip from "./Tooltip"

const CopyClick: Component<{
  text: string
  children: string
  styleAs?: "link" | "none"
  tooltipText?: string
  setClicked?: (clicked: boolean) => void
}> = ({ text, children, tooltipText, styleAs, setClicked }) => {
  styleAs ??= "none"
  return (
    <span
      className={`cursor-pointer ${styleAs === "link" ? "hover:text-gray-600 hover:dark:text-gray-400 transition duration-300" : ""}`}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setClicked?.(true)
      }}
    >
      {tooltipText ? (
        <Tooltip text={tooltipText} setHovered={setClicked}>
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </span>
  )
}

export default CopyClick