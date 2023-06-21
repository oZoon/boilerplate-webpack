import React from "react"

import "@/assets/lato.css"
import "@/assets/common.css"
import GithubIcon from "@/assets/images/github.svg"
import bear from "@/assets/images/bear.jpg"
import wing from "@/assets/images/wing.png"

export const App: React.FC = () => (
  <div>
    Hello world
    <GithubIcon />
    <img src={bear} width={100} />
    <img src={wing} width={100} />
  </div>
)
