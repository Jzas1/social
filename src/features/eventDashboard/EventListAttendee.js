import React from 'react'
import { Image, List } from 'semantic-ui-react'
import image from '../../assets/user.png'

export default function EventListAttendee({ attendee }) {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
}