import { useEffect, useState } from "react"

export const useDeviceSize = (listener?: (size: [number, number]) => any) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const cb = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      listener && listener([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", cb)
    return () => window.removeEventListener("resize", cb)
  }, [])

  return [width, height]
}

export type Component<P> = React.FunctionComponent<P & React.HtmlHTMLAttributes<CSSStyleDeclaration>>