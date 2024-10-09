
import React from "react"
import PortfolioSection from "../components/portfolio/portfoliosection"
import Aniname from "../assets/images/Screenshot 2024-03-25 190554.png"
import IndieIgnite from "../assets/images/indieignite.png"
import QRGen from "../assets/images/qrgen.png"
import PasswordGenerator from '../assets/images/passwordgenerator.png'
import WeatherApp from '../assets/images/weatherapp.png'
import DebateCafe from '../assets/images/debatecafenewpic.png'
import Adulting from '../assets/images/adultingimg.png'


const portfolioCards = [
    {
        _id: '1',
        title: 'Indie Ignite',
        description: ' *SITE IS CURRENTLY DOWN* This is Indie Ignite, a platform for indie game developers to share their game in the making, gather funding and support in hopes for a more successful launch!',
        link: 'https://indie-ignite-2cd818928232.herokuapp.com/',
        image: IndieIgnite
    },  
    {
        _id: '2',
        title: 'Aniname',
        description: "This is Aniname, a site for anime enjoyers to search for new shows, create a list of their current watched shows, or future watches",
        link: 'https://mikef13x.github.io/project-1-null/',
        image: Aniname
    },
    {
        _id: '3',
        title: 'Debate cafe',
        description: "This is Debate Cafe, a site for users to discuss hot topics or create their own!",
        link: 'https://debate-cafe.onrender.com/',
        image: DebateCafe
    },
    {
        _id: '4',
        title: 'QR Generator',
        description: 'This is an application where users can generate QR codes!',
        link: 'https://qr-generator-53w3.onrender.com/',
        image: QRGen
    },  
    {
        _id: '5',
        title: 'Adulting',
        description: 'This Application allows users to learn about becoming an adult, with in depth forums, comments, and a finance and health tracker!',
     
        link: 'https://adulting.onrender.com/',
        image: Adulting
    }, 
    {
        _id: '6',
        title: 'Password Generator',
        description: 'Users can choose a password between 8-128 characters. They can choose to include uppercase, lowercase, numbers, and special characters, and a password will be randomly generated!',
     
        link: 'https://mikef13x.github.io/password-generator/',
        image: PasswordGenerator
    },
    {
        _id: '7',
        title: 'Weather App',
        description: 'This is a Weather App where users can find the current weather and 5 day forecast of any city they choose!',
        link: 'https://mikef13x.github.io/weather-app/',
        image: WeatherApp
    },  
   
  

]


export default function PortfolioPage() {
    return (
        <>
       <PortfolioSection cards={portfolioCards}/>
     
        </>
    )
}