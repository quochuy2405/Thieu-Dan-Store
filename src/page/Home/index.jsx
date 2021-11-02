import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ListItem from '../../components/ListItem';
import Slider from '../../components/Slider';
import Header from './../../components/Header/index';
function Home(props) {
    return (
        <div>
            <Header/>
            <Slider/>
            <ListItem/>
           <MessengerCustomerChat
            pageId="100375022101294"
            appId="1459877547746717"
    
        />,
        </div>
    );
}

export default Home;