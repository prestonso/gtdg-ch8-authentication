// src/pages/app.js
import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import PrivateRoute from "../components/private-route"
import Profile from "../components/profile"
import Login from "../components/login"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
