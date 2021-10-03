import { MainContext } from "../Contexts/MainContext";
import { useContext } from "react";
import { makeStyles, Box } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import FaceBook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';

/* What the HomePage component contains (should): 
    - A Fixed 
*/

const homeStyles = makeStyles(theme => ({
    root: {
    },
    refIconsBox: {
        position: 'fixed',
        right: '0',
        left: '0',
        bottom: '0',
        display: 'flex',
        top: '0',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconItem: {
        width: '45px',
        height: '45px',
        display: 'flex',
        transition: 'all .5s ease-in-out',
        background: '#020202d8',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: ".1px solid #383838",
        cursor: 'pointer',
        '& svg': {
            fill: '#eeeeee'
        }
    },
    gitHub: {
        '&:hover': {
            background: '#f8f8f8'
        },
        '&:hover svg': {
            fill: '#171515'
        }
    },
    facebook: {
        '&:hover': {
            background: "#3b5998"
        },
        '&:hover svg': {
            fill: "#ffffff"
        }
    },
    twitter: {
        '&:hover': {
            background: '#00acee'
        },
        '&:hover svg': "#ffffff",
    },
    linkedin: {
        '&:hover': {
            background: '#0e76a8'
        },
        '&:hover svg': {
            fill: '#fff'
        }
    },
}))



const Home = () => {
    const contextUse = useContext(MainContext);
    
    const useStyle = homeStyles(); // Home Styling being called
    
    const ReferenceIcons = () => {
        /*
            This contains all the Social Media icons used to reference to my accounts.
            They are fixed on the screen placed on the RHS of the screen.
            But the opacity becomes 0 as the user reaches the bottom of the page.
        */
        return (
            <Box component='div' className={useStyle.refIconsBox}>
                <Box component='section' className="iconBar">
                    <Box component='div' className={`${useStyle.iconItem} ${useStyle.gitHub}`}><a href='https://www.github.com/simple-codes22' rel="noreferrer" target='_blank'><GitHub /></a></Box>
                    <Box component='div' className={`${useStyle.iconItem} ${useStyle.facebook}`}><a href='https://www.github.com/simple-codes22' rel="noreferrer" target='_blank'><FaceBook /></a></Box>
                    <Box component='div' className={`${useStyle.iconItem} ${useStyle.twitter}`}><a href='https://www.github.com/simple-codes22' rel="noreferrer" target='_blank'><Twitter /></a></Box>
                    <Box component='div' className={`${useStyle.iconItem} ${useStyle.linkedin}`}><a href='https://www.github.com/simple-codes22' rel="noreferrer" target='_blank'><LinkedIn /></a></Box>
                </Box>
            </Box>    
        )
    }
    
    return (
        <div>
            <ReferenceIcons />d
            <a href="https://www.google.com/">Hello world</a>
        </div>
    )
}

export default Home
