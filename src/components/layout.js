import React from "react"
import { Footer, Header } from "../components"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
