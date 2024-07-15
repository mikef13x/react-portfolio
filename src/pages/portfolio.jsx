
import React from "react"
import PortfolioSection from "../components/portfolio/portfoliosection"
import Aniname from "../assets/images/Screenshot 2024-03-25 190554.png"
import IndieIgnite from "../assets/images/stock-vector-vector-illustration-neon-future-game-pad-background-1861318969.jpg"

const portfolioCards = [
    {
        _id: '1',
        title: 'Indie Ignite',
        description: 'this is indie ignite lorem ipsum , indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ip',
        link: 'https://github.com/SpencerKlink/Indie-Ignite',
        image: Aniname
    },  
    {
        _id: '2',
        title: 'Aniname',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        link: 'https://github.com/mikef13x/project-1-null',
        image: IndieIgnite
    },
    {
        _id: '3',
        title: 'Indie Ignite',
        description: 'this is indie ignite',
        link: 'https://github.com/SpencerKlink/Indie-Ignite',
        image: Aniname
    },  
    {
        _id: '4',
        title: 'Aniname',
        description: 'this is indie ignite lorem ipsum , indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ip',
     
        link: 'https://github.com/mikef13x/project-1-null',
        image: IndieIgnite
    },
    {
        _id: '5',
        title: 'Indie Ignite',
        description: 'this is indie ignite lorem ipsum , indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ip',
        link: 'https://github.com/SpencerKlink/Indie-Ignite',
        image: Aniname
    },  
    {
        _id: '6',
        title: 'Aniname',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        link: 'https://github.com/mikef13x/project-1-null',
        image: IndieIgnite
    },
    {
        _id: '7',
        title: 'Indie Ignite',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        link: 'https://github.com/SpencerKlink/Indie-Ignite',
        image: Aniname
    },  
    {
        _id: '8',
        title: 'Aniname',
        description: 'this is indie ignite lorem ipsum , indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ip',
        link: 'https://github.com/mikef13x/project-1-null',
        image: IndieIgnite
    },
    {
        _id: '9',
        title: 'Indie Ignite',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        link: 'https://github.com/SpencerKlink/Indie-Ignite',
        image: Aniname
    },  
    {
        _id: '10',
        title: 'Aniname',
        description: 'this is indie ignite lorem ipsum , indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ipsumindie ignite lorem ipsum, indie ignite lorem ip',
        link: 'https://github.com/mikef13x/project-1-null',
        image: IndieIgnite
    },

]


export default function PortfolioPage() {
    return (
        <>
       <PortfolioSection cards={portfolioCards}/>
     
        </>
    )
}