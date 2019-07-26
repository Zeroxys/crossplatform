import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ContinuedConversation from './continuedConversation'

import language from '../../../../public/images/settings/language.png'
import conversation from '../../../../public/images/settings/conversation.png'
import location from '../../../../public/images/settings/location.png'
import calendar from '../../../../public/images/settings/calendar.png'
import setSquare from '../../../../public/images/settings/setSquare.png'
import currency from '../../../../public/images/settings/currency.png'
import history from '../../../../public/images/settings/history.png'
import child from '../../../../public/images/settings/child.png'

const list_personal = [
    {
        id: 1,
        img: language,
        title: 'Language',
        secondary: 'Name, Birthday, Addresses…',
        link: '/settings/assistant/language'
    },
    {
        id: 2,
        img: conversation,
        title: 'Continued Conversation',
        secondary: 'Edit your contact list',
        link: '/settings/assistant/continued-conversation'
    },
    {
        id: 3,
        img: location,
        title: 'Location',
        secondary: 'Payment Methods, Delivery, Billing…',
        link: '/settings/assistant/location'
    },
    {
        id: 4,
        img: calendar,
        title: 'Date & Time',
        secondary: 'Medical conditions, Allergies & Reactions…',
        link: '/settings/assistant/basic_info'
    },
    {
        id: 5,
        img: setSquare,
        title: 'Units',
        secondary: 'Modes for getting around',
        link: '/settings/assistant/basic_info'
    },
    {
        id: 6,
        img: currency,
        title: 'Currency',
        secondary: 'For governmental operations',
        link: '/settings/assistant/basic_info'
    },
    {
        id: 7,
        img: history,
        title: 'Activity',
        secondary: 'Link accounts to your Assistant',
        link: '/settings/assistant/basic_info'
    },
    {
        id: 8,
        img: child,
        title: 'Child-Friendly Mode',
        secondary: 'Link accounts to your Assistant',
        link: '/settings/assistant/basic_info'
    },
]



const Assistant = ({setComponent}) => {

    console.log('miprop --->', setComponent)

    //setComponent(false)

    const [screen, setScreen] = useState(false)
    //console.log('---> this Props', props)
    console.log(screen)

    return(
        <div style = { { width: '80%', marginTop: '3%'} } >
            {
                list_personal.map( (item,i) => {

                
                return (<Link onClick={ () => setComponent(true)} key={i} to={item.link}> <div  style = { { borderBottom: '1px solid #A6A8BA', display: 'flex', marginBottom: '2%' } } >
                    <img src = { item.img } style = { { width: '5.5%', height: '5.5%' } } />
                    <p className = "text_list_secondary"> <strong className = "text" > { item.title } </strong> <br/> { item.secondary } </p>
                </div></Link>)
                
            })
            }
        </div>
    )
}

export default Assistant

