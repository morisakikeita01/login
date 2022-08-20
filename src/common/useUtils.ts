export default function() {
    const isIPad = () => {
        return navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform); //Deprecated
        // /macOS/.test(navigator.userAgentData.platform); // Newer alternative, but not fully supported
    }
    const isSmartphone = ():boolean => {
        if(window.innerWidth < 768) {
            return true;
        }
        return false;
    }

    const isEdge = ():boolean => {
        const userA = window.navigator.userAgent;
        // if(userA.indexOf("Chrome/")>-1 || userA.indexOf("Edge/")>-1)
        if(userA.indexOf("Edg/")>-1 || userA.indexOf("Edge/")>-1)
            return true
        return false
    }
    
    const isWindows = ():boolean => {
        const version = window.navigator.appVersion
        if(version.indexOf("Window")>-1)
            return true
        return false
    }

    return {
        isIPad, isSmartphone, isEdge, isWindows,
    }
}