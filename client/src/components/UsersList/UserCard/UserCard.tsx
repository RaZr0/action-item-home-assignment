import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
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
        <Card>
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