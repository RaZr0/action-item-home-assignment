import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


type UserCardProps = {
    id: string;
    thumbnailUrl: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    country: string;
    phoneNumber: string;
    email: string;
}

export const UserCard = ({ id, title, country, email, gender, firstName, lastName, phoneNumber, thumbnailUrl }: UserCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar src={thumbnailUrl} sx={{ bgcolor: red[500] }}>
                    </Avatar>
                }
                title={`${title} ${firstName} ${lastName}`}
            />
            <CardContent>
                <Typography variant="body2">
                    Gender: {gender}
                </Typography>

                <Typography variant="body2">
                    Country: {country}
                </Typography>
                <Typography variant="body2">
                    Phonenumber: {phoneNumber}
                </Typography>
                <Typography variant="body2">
                    Email: {email}
                </Typography>
            </CardContent>
        </Card>
    );
}