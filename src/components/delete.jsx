import { Box, Typography, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { React, useEffect, useState } from "react"
import AxiosInstance from "./axios"
import Message from "./forms/message";
import { useNavigate } from 'react-router'
import { useParams } from "react-router";
import { useFormik } from 'formik'

const Delete = () => {

    const params = useParams()
    const paramsId = params.id

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
        AxiosInstance.get(`footballClub/${paramsId}/`).then((res) => {
            setFootballClub(res.data)
        })
    }

    console.log(footballClub)

    useEffect(() => {
        GetData()
    }, [])

    const deleteRequest = (event) => {
        event.preventDefault()
        AxiosInstance.delete(`footballClub/${paramsId}/`)
            .then(() => {
                setMessage(
                    <Message
                        messagecolor={'green'}
                        messagetext={"Club Deleted from Database Successfully"}
                    />
                )
                setTimeout(() => {
                    navigation('/')
                }, 1500)
            })
    }


    return (
        <div>
            <form onSubmit={deleteRequest}>
                <Box sx={{ backgroundColor: '#eb2424' }} className={'topbar'}>
                    <AddCircleIcon sx={{ marginRight: '20px' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Deleting the Club from the Database
                    </Typography>
                </Box>

                {message}

                <Box className={'formdeletearea'}>
                    <Typography>
                        Are you sure to delete  <strong> {footballClub.name} </strong> from <strong> {footballClub.city} </strong>
                    </Typography>
                </Box>

                <Button type="submit" sx={{ width: '100%' }} variant="contained">Delete</Button>
            </form>
        </div>
    )
}

export default Delete