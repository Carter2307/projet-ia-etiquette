import { RouterProvider, useNavigate } from "react-router-dom"
import router from "../routes/routes";
import React from "react";


type AuthData = {
  data?: {token?: string}
}

interface authContext {
auth: AuthData | null,
setAuthData: (data: AuthData | null) => void
}

export const AuthContext = React.createContext<authContext>({
  auth: null,
  setAuthData: () => void 0
});


const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [auth, setAuth] = React.useState<AuthData | null>(JSON.parse(localStorage.getItem("auth") || "null"))

  const setAuthData = (data: AuthData|null) => {
      localStorage.setItem("auth", JSON.stringify(data))
      setAuth(data)
  }


  return <AuthContext.Provider value={{auth, setAuthData}}>
    {children}
  </AuthContext.Provider>
}






function App() {
  return <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
}

export default App
