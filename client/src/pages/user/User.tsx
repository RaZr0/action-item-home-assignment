import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useLocation, useNavigate, useParams } from "react-router";
import * as yup from 'yup';
import { addUser, deleteUser, updateUser } from "../../services/users.service";
import { usersStore } from "../../store/users.store";
import { ActionsStyled, FormStyled } from "./User.styles";
import { AddUserDto } from "../../dtos/add-user.dto";

export interface UserDetails {
    id?: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    imageUrl: string;
    dateOfBirth: string;
    address: {
        street: string;
        city: string;
        state: string;
    },
    contact: {
        email: string;
        phone: string;
    }
}


const validationSchema = yup.object({
    firstName: yup
        .string().required('Required'),
    lastName: yup
        .string().required('Required'),
});

interface FormValues {
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    gender: string,
    imageUrl: string,
    dateOfBirth: string,
    streetAddress: string,
    city: string,
    state: string,
    contactEmail: string,
    contactPhone: string
}


export const User = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const state = location.state as UserDetails;
    const { id } = useParams();
    const isNew = id === 'new';


    const formik = useFormik<FormValues>({
        initialValues: {
            id: state.id as string,
            firstName: state.firstName,
            lastName: state.lastName,
            title: state.title,
            gender: state.gender,
            imageUrl: state.imageUrl,
            dateOfBirth: state.dateOfBirth,
            streetAddress: state.address.street,
            city: state.address.city,
            state: state.address.state,
            contactEmail: state.contact.email,
            contactPhone: state.contact.phone
        },
        onSubmit: async (values) => {
            try {
                const req: AddUserDto = {
                    address: {
                        city: values.city,
                        state: values.state,
                        street: values.streetAddress
                    },
                    contact: {
                        email: values.contactEmail,
                        phone: values.contactPhone
                    },
                    dateOfBirth: values.dateOfBirth,
                    gender: values.gender,
                    id: values.id,
                    imageUrl: values.imageUrl,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    title: values.title,
                    thumbnailUrl: values.imageUrl
                }
                await addUser(req);
            }
            catch (err) {
            }

            navigate(-1);

        },
        validationSchema
    });


    async function onDelete() {
        try {
            await deleteUser(id as string);
            navigate(-1);
        }
        catch (err) {
            alert(err);
        }

    }

    async function onUpdate() {
        const errors = await formik.validateForm();
        if (!Object.keys(errors).length) {
            if (isNew) {
                usersStore.setUsers(usersStore.users.map(u => {
                    if (u.login.uuid === id) {
                        return {
                            ...u,
                            name: {
                                ...u.name,
                                first: formik.values.firstName,
                                last: formik.values.lastName
                            }
                        }
                    }
                    return u;
                }))
            }
            else {
                try {
                    await updateUser(id as string, {
                        firstName: formik.values.firstName,
                        lastName: formik.values.lastName,
                    });
                }
                catch (err) {
                    alert(err);
                }
            }

            navigate(-1);
        }
    }

    function onBack() {
        navigate(-1);
    }



    return <div>
        <FormStyled onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                fullWidth
                id="gender"
                name="gender"
                label="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
                InputProps={{
                    readOnly: true
                }}
            />
            <TextField
                fullWidth
                id="imageUrl"
                name="imageUrl"
                label="image url"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                helperText={formik.touched.imageUrl && formik.errors.imageUrl}
                InputProps={{
                    readOnly: true
                }}
            />

            <TextField
                fullWidth
                id="dateOfBirth"
                name="dateOfBirth"
                label="date of birth"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                InputProps={{
                    readOnly: true
                }}
            />

            <TextField
                fullWidth
                id="streetAddress"
                name="streetAddress"
                label="street address"
                value={formik.values.streetAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                InputProps={{
                    readOnly: true
                }}
            />

            <TextField
                fullWidth
                id="city"
                name="city"
                label="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                InputProps={{
                    readOnly: true
                }}
            />


            <TextField
                fullWidth
                id="state"
                name="state"
                label="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                InputProps={{
                    readOnly: true
                }}
            />


            <TextField
                fullWidth
                id="contactEmail"
                name="contactEmail"
                label="contact email"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contactEmail && Boolean(formik.errors.contactEmail)}
                helperText={formik.touched.contactEmail && formik.errors.contactEmail}
                InputProps={{
                    readOnly: true
                }}
            />


            <TextField
                fullWidth
                id="contactPhone"
                name="contactPhone"
                label="contact phone"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contactPhone && Boolean(formik.errors.contactPhone)}
                helperText={formik.touched.contactPhone && formik.errors.contactPhone}
                InputProps={{
                    readOnly: true
                }}
            />


            <ActionsStyled>
                {isNew && <Button color="primary" variant="contained" fullWidth type="submit">
                    Save
                </Button>}

                {!isNew && <>

                    <Button color="error" variant="contained" fullWidth onClick={onDelete}>
                        Delete
                    </Button>
                </>}

                <Button color="info" variant="contained" fullWidth onClick={onUpdate}>
                    Update
                </Button>

                <Button color="warning" variant="contained" fullWidth onClick={onBack}>
                    Back
                </Button>
            </ActionsStyled>

        </FormStyled>
    </div>
}