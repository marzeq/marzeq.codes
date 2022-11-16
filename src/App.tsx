import { ReactNode, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import CopyClick from "./Components/CopyClick"
import Link from "./Components/Link"
import Tooltip from "./Components/Tooltip"
import { Component } from "./util"

const DISCORD_TAG = "marzeq#0001"

const App = () => {
  const [copied, setCopied] = useState(false)

  return (<>
    <main className="bg-gray-100 text-gray-900 min-h-screen dark:bg-gray-900 dark:text-gray-100 font-mono">
      <div className="flex justify-center">
        <div className="mx-auto px-4 py-12 max-w-3xl flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold">Hi! I'm marzeq!</h1>
          <TypeAnimation className="text-2xl font-medium text-center"
            sequence={[
              "I write code.",
              50,
              "I write ",
              400,
              "I write crappy code.",
              50,
              "I write ",
              400,
              "I write good-enough code.",
              50,
              "I ",
              400,
              "I translate stuff.",
              50,
              "I ",
              400,
              "I proofread stuff.",
              50,
              "I ",
              400,
              "I play games.",
              50,
              "I play ",
              400,
              "I play Rocket League.",
              50,
              "I ",
              400,
              "I do lots of other stuff.",
              400,
              "To learn more about me, click on one of the links below.",
            ]}
          />

          <h2 className="text-3xl font-bold mt-14" id="findme">Find me</h2>

          <div className="flex justify-center mt-4 text-2xl font-medium gap-5">
            <Link href="https://github.com/marzeq">GitHub</Link>
            <Link href="https://twitter.com/marzeqpog">Twitter</Link>
            <Tooltip setHovered={hovered => !hovered && copied && setCopied(false)} text={copied ? "Copied to clipboard!" : `Copy ${DISCORD_TAG} to clipboard`}>
              <CopyClick styleAs="link" setClicked={setCopied} text={DISCORD_TAG}>Discord</CopyClick>
            </Tooltip>
          </div>

          <div className="flex flex-col justify-center mt-12 text-2xl font-medium gap-5 text-center">
            <h2 className="text-3xl font-bold">My recent projects</h2>

            <div className="flex flex-col gap-3 text-left">
              <Project name="👀" description="👀 In progress... Check my social media for possible updates." />
              <Project name="marzeq.codes" oss="https://github.com/marzeq/new-website" description="This website" link="/" />
              <Project name="selfhost-discord-music-bot" oss description="A self-hostable Docker image of a Discord music bot" link="https://hub.docker.com/repository/docker/marzeq/selfhost-discord-music-bot">
                <BlueLink href="/#findme" notBlank>Contact me</BlueLink> if you want me to give you access to my instance.
              </Project>
              <Tooltip text="I cannot guarantee their code quality is up to my current standards"><Project name="Older projects" description="See all my older projects on GitHub." link="https://github.com/marzeq?tab=repositories" /></Tooltip>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>)
}

export default App


const BlueLink: Component<{
  href: string
  notBlank?: boolean
  children: ReactNode
}> = ({ href, children, notBlank }) => {
  return (<a href={href} target={!notBlank ? "_blank" : undefined} className="mt-2 text-sm text-blue-500 hover:text-blue-300 hover:underline transition duration-300">{children}</a>)
}


const Project: Component<{
  name: string
  description: string
  link?: string
  oss?: boolean | string
  children?: ReactNode
}> = ({ name, description, link, oss, children }) => {
  return (
    <a href={link} target="_blank">
      <div className="select-none max-w-xl border-x-2 border-gray-500 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 rounded p-4 cursor-pointer">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 w-full text-base">{description}</p>
        {oss ? (typeof oss === "string" ? <BlueLink href={oss}>Source code</BlueLink> : <span className="mt-2 text-sm">Source code available soon</span>) : null}
        {children && <div className="mt-1 text-sm">{children}</div>}
      </div>
    </a>
  )
}
