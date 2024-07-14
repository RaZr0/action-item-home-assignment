import { alpha, styled } from '@mui/material/styles';

export const ActionsStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '1rem'
}));

export const FormStyled = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
}));