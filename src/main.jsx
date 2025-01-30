import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "flowbite/dist/flowbite.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider value={defaultSystem}>

        <App />

    </ChakraProvider>
)
