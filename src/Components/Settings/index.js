import React, { useState } from 'react';
import Menu from '../Main/Menu/Menu';
import SlideMenu from '../SlideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route, Link } from 'react-router-dom'

import BasicInfo from './Personal/BasicInfo'
import AddAddress from './Personal/AddAddress'
import HomeAddress from './Personal/HomeAddress'

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

    const [ isOpenSlide, setOpenSlide ] = useState( false )
    const [ externalComponent, setComponent ] = useState( false )

    const logout = (e) => {
        e.preventDefault()
        console.log(window.localStorage.getItem('user'))

        window.localStorage.removeItem( 'user' );

        if(!window.localStorage.getItem('user')) {
            window.location.href = '/'
        }
    }

    const Personal = ( ) => {
        return (
            <div style = { { width: '80%', marginTop: '5%'} } >
                {
                    list_personal.map( item => <div key = { item.id } style = { { borderBottom: '1px solid #A6A8BA', display: 'flex', marginBottom: '2%' } } >
                        <img src = { item.img } style = { { width: '5.5%', height: '5.5%' } } />
                        <p className = "text_list_secondary"> <strong> <Link onClick = { () => setComponent( true ) } to = { item.link } className = "text_title" > { item.title } </Link> </strong> <br/> { item.secondary } </p>
                    </div> )
                }
            </div>
        )
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
            <Route path = '/settings/personal/basic_info' exact component = { BasicInfo } />
            <Route path = '/settings/personal/basic_info/addAddress' exact component = { AddAddress } />
            <Route path = '/settings/personal/basic_info/homeAddress' exact component = { HomeAddress } />
            {
                externalComponent ? (null) : ( 
                    <div style = { { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' } } >
                        <h3 className = "text_settings" style = { { marginTop: '5%' } } > Settings </h3>
                        <img src = { user } style = { { width: '25%' } } />
                        <h4 className = "text_settings" > Jane Doe </h4>
                        <h5 className = "text_settings_secondary" > janedoe@icloud.com </h5>
                        <ul className = "content_menu">
                            <Link onClick = { () => setComponent( false ) } to = "/settings/personal"  className = "active"> Personal </Link>
                            <Link onClick = { () => setComponent( false ) } to = "/settings/assistant" > Assistant </Link>
                            <Link onClick = { () => setComponent( false ) } to = "/settings/notifications" > Notifications </Link>
                        </ul>
                        <Route path = "/settings/personal" exact component = { Personal } />
                        <Route path = "/settings/assistant" exact component = { Assistant } />
                    </div>
                 )
            }
            <Menu/>
        </div>
    );
};



const Assistant = () => {
    return ( 
        <h1> Assistant </h1>
    )
}

const list_personal = [
    {
        id: 1,
        img: basic_info,
        title: 'Basic Info',
        secondary: 'Name, Birthday, Addresses…',
        link: '/settings/personal/basic_info'
    },
    {
        id: 2,
        img: contacts,
        title: 'Contacts',
        secondary: 'Edit your contact list',
        link: '/settings/personal/contact'
    },
    {
        id: 3,
        img: wallet,
        title: 'Wallet',
        secondary: 'Payment Methods, Delivery, Billing…',
        link: '/settings/personal/wallet'
    },
    {
        id: 4,
        img: health,
        title: 'Health',
        secondary: 'Medical conditions, Allergies & Reactions…',
        link: '/settings/personal/health'
    },
    {
        id: 5,
        img: transportation,
        title: 'Transportation',
        secondary: 'Modes for getting around',
        link: '/settings/personal/transportation'
    },
    {
        id: 6,
        img: verification,
        title: 'Verification',
        secondary: 'For governmental operations',
        link: '/settings/personal/verification'
    },
    {
        id: 7,
        img: connected_accounts,
        title: 'Connected Accounts',
        secondary: 'Link accounts to your Assistant',
        link: '/settings/personal/connected_accounts'
    },
]

export default Index;