import React, { createContext, useState } from "react"

interface IState {
  drawerStatus: boolean
}
interface IActions {
  displayDrawer: () => void
  hideDrawer: () => void
}

export interface ICtx {
  state: IState
  actions: IActions
}

const AppContext = createContext<ICtx | null>(null)

const AppProvider: React.FC = (props) => {
  const [state, setState] = useState<IState>({
    drawerStatus: false,
  })
  const displayDrawer = () => setState({ drawerStatus: true })
  const hideDrawer = () => setState({ drawerStatus: false })

  return (
    <AppContext.Provider
      value={{
        state: state,
        actions: {
          displayDrawer: displayDrawer,
          hideDrawer: hideDrawer,
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
