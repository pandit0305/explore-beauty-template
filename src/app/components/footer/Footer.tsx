import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { styles } from '@/app/styles/explore.styles';
import { Backdrop, Box, CircularProgress, Divider, Stack, TextField, Typography, styled } from '@mui/material';

interface IUserForm {
    name: string,
    email: string,
    phone: string,
    service: string
}
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});

function Footer() {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IUserForm>();

    const onSubmit: SubmitHandler<IUserForm> = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const request = await fetch("https://getform.io/f/ce9a921f-b3f7-4da0-aceb-5271caf1fa66", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log(request.status);
            if (request.status == 200) {
                alert("Form is submitted");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <Box sx={{paddingBottom:"30px"}}>
            
            <Divider sx={{ marginTop: "30px" }} />
            <Typography
                sx={styles.heading}
                variant="h4"
            >Contact</Typography>

            <Box sx={styles.footerForm}>
                <Box sx={styles.formBox}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CssTextField
                            sx={styles.textField}
                            fullWidth
                            id="outlined-basic"
                            label="Name"
                            {...register("name", { required: "Name is required.", maxLength: 20 })} placeholder='Your name'
                        />
                        <ErrorMessage errors={errors} name="name" render={({ message }) => <p style={styles.errorText}>{message}</p>} />
                        <CssTextField
                            sx={styles.textField}
                            fullWidth
                            id="outlined-basic"
                            label="Email (Optional)"
                            {...register("email")} placeholder='Your email id'
                        />
                        {/* <ErrorMessage errors={errors} name="email" render={({ message }) => <p style={styles.errorText}>{message}</p>} /> */}
                        <CssTextField
                            sx={styles.textField}
                            fullWidth
                            id="outlined-basic"
                            label="Phone"
                            {...register("phone", { required: "Phone is required.", pattern: /^[6-9]\d{9}$/ })} placeholder='Your phone number'
                        />
                        <ErrorMessage errors={errors} name="phone" render={({ message }) => <p style={styles.errorText}>{message}</p>} />
                        <CssTextField
                            sx={styles.textField}
                            fullWidth
                            id="outlined-basic"
                            label="Service"
                            {...register("service", { required: "Please write your service.", maxLength: 256 })} placeholder='Write your service'
                        />
                        <ErrorMessage errors={errors} name="service" render={({ message }) => <p style={styles.errorText}>{message}</p>} />
                        <Box sx={styles.actionBtn}>
                            <Stack direction="row" spacing={2}>
                                <CssTextField sx={styles.textField} type="reset" />
                                <CssTextField sx={styles.textField} type="submit" />
                                {/* {loading && <span>Loading...</span>} */}
                            </Stack>
                        </Box>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </form>
                </Box>
            </Box>
            
        </Box>
    )
}
export default Footer