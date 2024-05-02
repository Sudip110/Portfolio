import { createContext, useContext} from "react";

export const SidebarContext = createContext({menuOpen:null,setMenuOpen:()=>{}});

export const SidebarContextProvider = SidebarContext.Provider

export default function useSidebarContext ()
{
    return useContext(SidebarContext)
}