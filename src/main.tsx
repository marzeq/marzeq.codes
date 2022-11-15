import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Component } from "./util"

export const Title: Component<{
  children: string
}> = ({ children }) => {
  const head = document.head
  if (head && children) {
    const existingTitle = head.querySelectorAll("title")
    if (existingTitle.length > 0) {
      existingTitle.forEach((title) => head.removeChild(title))
    }
    const title = document.createElement("title")
    title.innerText = children
    head.appendChild(title)
  }

  return null
}

export const Favicon: Component<{
  src: string
  children?: never
}> = ({ src }) => {
  const head = document.head
  if (head && src) {
    const existingFavicon = head.querySelectorAll("link[rel='icon']")
    if (existingFavicon.length > 0) {
      existingFavicon.forEach((favicon) => head.removeChild(favicon))
    }
    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.href = src
    head.appendChild(favicon)
  }

  return null
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
