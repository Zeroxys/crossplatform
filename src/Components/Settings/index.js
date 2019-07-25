import React, { useState } from 'react';
import Menu from '../Main/Menu/Menu';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import user from '../../../public/images/user.png'

import basic_info from '../../../public/images/settings/basic_info.png'
import connected_accounts from '../../../public/images/settings/connected_accounts.png'
import contacts from '../../../public/images/settings/contacts.png'
import health from '../../../public/images/settings/health.png'
import transportation from '../../../public/images/settings/transportation.png'
import verification from '../../../public/images/settings/verification.png'
import wallet from '../../../public/images/settings/wallet.png'

import './index.css'

const Index = () => {

    const [isOpenSlide, setOpenSlide] = useState( false )

    const logout = (e) => {
        e.preventDefault()
        console.log(window.localStorage.getItem('user'))

        window.localStorage.removeItem( 'user' );

        if(!window.localStorage.getItem('user')) {
            window.location.href = '/'
        }
    }

    return (
        <div className = "interfaceContent">
            <div className="burgerIcon" onClick={ () => setOpenSlide( !isOpenSlide ) }>
                <FontAwesomeIcon icon={ isOpenSlide ? faChevronLeft : faBars } size="2x"/>
            </div>
            <SlideMenu 
                logout = { logout }
                isOpen = { isOpenSlide }
                // openfeedback = { this.openfeedback }
            />
            <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' } } >
                <h3 className = "text_settings" style = { { marginTop: '5%' } } > Settings </h3>
                <img src = { user } style = { { width: '25%' } } />
                <h4 className = "text_settings" > Jane Doe </h4>
                <h5 className = "text_settings_secondary" > janedoe@icloud.com </h5>
                <ul className = "content_menu">
                    <li className = "active"> Personal </li>
                    <li> Assistant </li>
                    <li> Notifications </li>
                </ul>
                <div style = { { width: '80%', marginTop: '3%'} } >
                    {
                        list_personal.map( item => <div style = { { borderBottom: '1px solid #A6A8BA', display: 'flex', marginBottom: '2%' } } >
                            <img src = { item.img } style = { { width: '5.5%', height: '5.5%' } } />
                            <p className = "text_list_secondary"> <strong className = "text" > { item.title } </strong> <br/> { item.secondary } </p>
                        </div> )
                    }
                </div>
            </div>
            <Menu/>
        </div>
    );
};

const list_personal = [
    {
        id: 1,
        img: basic_info,
        title: 'Basic Info',
        secondary: 'Name, Birthday, Addresses…'
    },
    {
        id: 2,
        img: contacts,
        title: 'Contacts',
        secondary: 'Edit your contact list'
    },
    {
        id: 3,
        img: wallet,
        title: 'Wallet',
        secondary: 'Payment Methods, Delivery, Billing…'
    },
    {
        id: 4,
        img: health,
        title: 'Health',
        secondary: 'Medical conditions, Allergies & Reactions…'
    },
    {
        id: 5,
        img: transportation,
        title: 'Transportation',
        secondary: 'Modes for getting around'
    },
    {
        id: 6,
        img: verification,
        title: 'Verification',
        secondary: 'For governmental operations'
    },
    {
        id: 7,
        img: connected_accounts,
        title: 'Connected Accounts',
        secondary: 'Link accounts to your Assistant'
    },
]

export default Index;