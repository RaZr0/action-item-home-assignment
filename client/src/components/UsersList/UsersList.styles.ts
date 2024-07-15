import { alpha, styled } from '@mui/material/styles';

export const UsersListStyles = styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
}));


export const UserItemStyled = styled('li')(({ theme }) => ({
    width: '345px',
    cursor: 'pointer'
}));