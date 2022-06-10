import Analytics from "../pages/Analytics";
import Debts from "../pages/Debts";
import Earnings from "../pages/Earnings";
import Payments from "../pages/Payments";




const pathsWithNavbar = {
    debts:'/debts',
    payments:'/payments',
    earnings:'/earnings',
    analytics:'/analytics'
}


const getCurrentComponent = (path) => {
    if(pathsWithNavbar.payments===path){
        return <Payments/>
    }
    else if(pathsWithNavbar.debts === path){
        return <Debts/>
    }
    else if(pathsWithNavbar.earnings === path){
        return <Earnings/>
    }
    else if(pathsWithNavbar.analytics === path){
        return <Analytics/>
    }
}


export {getCurrentComponent};