import React from "react"
import { Switch } from "react-router"
import Route from "react-router"

const urlList = [
  {
    id: "Nonstructural component seismic demands (ASCE 7)",
    url: "/nonstructural-components-seismic-demand",
    type: "General",
  },
  {
    id: "Rebar Properties",
    url: "/concrete-rebar-properties",
    type: "Concrete",
  },
  {
    id: "Concrete Properties",
    url: "/concrete-properties",
    type: "Concrete",
  },
  {
    id: "Beam capacity (CSA A23.3)",
    url: "/concrete-beam-capacity",
    type: "Concrete",
  },
  {
    id: "Diaphragm capacity (ACI 318)",
    url: "/concrete-diaphragm",
    type: "Concrete",
  },
  {
    id: "Shear-friction capacity (ACI 318)",
    url: "/concrete-shear-friction",
    type: "Concrete",
  },
  {
    id: "Column capacity (CSA A23.3)",
    url: "/concrete-column",
    type: "Concrete",
  },
  {
    id: "Bearing capacity (ACI 318)",
    url: "/concrete-bearing",
    type: "Concrete",
  },
  {
    id: "Section Properties Lookup",
    url: "/steel-sections",
    type: "Steel",
  },
  {
    id: "Fillet weld  (CSA S16)",
    url: "/steel-fillet-weld",
    type: "Steel",
  },
  {
    id: "Tension capacity (CSA S16)",
    url: "/steel-tension",
    type: "Steel",
  },
  {
    id: "Weld group capacity (elastic method)",
    url: "/steel-weld-group",
    type: "Steel",
  },
]

const router = () => {
  return (
    <Switch>
      <Route path="/about" />
      <Route path="/contact" />
    </Switch>
  )
}
export default router
