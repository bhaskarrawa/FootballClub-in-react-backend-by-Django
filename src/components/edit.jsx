import { React, useEffect, useState } from "react"
import AxiosInstance from "./axios"
import { Box, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextForm from "./forms/textField";
import SelectField from "./forms/selectField";
import MultiSelectField from "./forms/multiSelectField";
import DescriptionField from "./forms/descriptionField";
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
import * as yup from 'yup'
import Message from "./forms/message";
import { useNavigate } from 'react-router'
import { useParams } from "react-router";


const Edit = () => {

    const params = useParams()
    const paramsId = params.id

    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [characteristic, setCharacteristic] = useState([])
    const [message, setMessage] = useState([])
    const [footballClub, setFootballClub] = useState({
        name: '',
        city: '',
        description: '',
        attendance: '',
        country: '',
        characteristic: [],
        league: ''
    })

    const navigation = useNavigate()

    const GetData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)
        })
        AxiosInstance.get('league/').then((res) => {
            setLeague(res.data)
        })
        AxiosInstance.get('characteristic/').then((res) => {
            setCharacteristic(res.data)
        })
        AxiosInstance.get(`footballClub/${paramsId}/`).then((res) => {
            setFootballClub(res.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    const validationSchema = yup.object({
        name: yup
            .string('The name must be string')
            .required('Name must be required'),
        city: yup
            .string('The city must be string')
            .required('city must be required'),
        attendance: yup
            .number('The Attendance must be Number')
            .required('Attendance must be required'),
        characteristic: yup
            .array()
            .min(1, 'Atleast One Characteristic has to given'),
        description: yup
            .string('the description must be')
            .required('Description must be required')
    })

    console.log(footballClub)


    // const editData = footballClub.find((club) => (club.id === id))

    const formik = useFormik({
        initialValues: {
            name: footballClub.name,
            city: footballClub.city,
            description: footballClub.description,
            attendance: footballClub.attendance,
            country: footballClub.country,
            characteristic: footballClub.characteristic,
            league: footballClub.league
        },
        enableReinitialize: true,

        validationSchema: validationSchema,

        onSubmit: (values) => {
            AxiosInstance.put(`footballClub/${paramsId}/`, values)
                .then(() => {
                    setMessage(
                        <Message
                            messagecolor={'green'}
                            messagetext={"Club Updated to the Database Successfully"}
                        />
                    )
                    setTimeout(() => {
                        navigation('/')
                    }, 1500)
                })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Box className={'topbar'}>
                    <AddCircleIcon sx={{ marginRight: '20px' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Create Clubs!
                    </Typography>
                </Box>

                {message}

                <Box className={'formbox'}>

                    <Box className={'formarea'}>
                        <TextForm label={'ClubName'}
                            name={'name'}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <Box sx={{ marginBottom: '20px' }}>
                        </Box>

                        <TextForm label={'City'}
                            name={'city'}
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />

                        <Box sx={{ marginBottom: '20px' }}>
                        </Box>

                        <SelectField
                            label={'League'}
                            options={league}
                            name={'league'}
                            value={formik.values.league}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <Box sx={{ marginBottom: '20px' }}>
                        </Box>

                        <Button type="submit" sx={{ width: '100%' }} variant="contained">Submit the form</Button>

                    </Box>

                    <Box className={'formarea'}>

                        <TextForm label={'Attendence'}
                            name={'attendance'}
                            value={formik.values.attendance}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.attendance && Boolean(formik.errors.attendance)}
                            helperText={formik.touched.attendance && formik.errors.attendance}
                        />

                        <Box sx={{ marginBottom: '20px' }}>
                        </Box>

                        <SelectField
                            label={'Country'}
                            options={country}
                            name={'country'}
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />

                        <Box sx={{ marginBottom: '20px' }}>
                        </Box>

                        <MultiSelectField
                            label={'Characterstics'}
                            options={characteristic}
                            name={'characteristic'}
                            value={formik.values.characteristic}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.characteristic && Boolean(formik.errors.characteristic)}
                            helperText={formik.touched.characteristic && formik.errors.characteristic}
                        />

                    </Box>

                    <Box className={'formarea'}>
                        <DescriptionField
                            label={'Description'}
                            rowNo={7}
                            name={'description'}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Box>

                    <Box className={'Formarea'}>

                    </Box>

                </Box>

            </div>
        </form>
    )
}

export default Edit