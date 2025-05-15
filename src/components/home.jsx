import React from "react"
import { useEffect, useMemo, useState } from "react"
import { MaterialReactTable } from 'material-react-table'
import { Box, Typography, IconButton, Chip } from '@mui/material'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import AxiosInstance from './axios'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {

    const [myData, setMydata] = useState([])

    const GetData = () => {
        AxiosInstance.get('footballClub/').then((res) => {
            setMydata(res.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    const column = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: 'Name'

            },
            {
                accessorKey: 'league_details.name',
                header: 'League'

            },
            {
                accessorKey: 'country_details.name',
                header: 'Country'

            },
            {
                accessorKey: 'attendance',
                header: 'Attendance'

            },
            {
                accessorKey: 'city',
                header: 'City'

            },
            {
                accessorKey: 'characteristic_name',
                header: 'Characteristics',
                Cell: ({ cell }) => (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {
                            cell.getValue()?.map((char, index) => (
                                <Chip
                                    key={index}
                                    label={char}
                                />
                            ))
                        }
                    </div>
                )

            },
        ]
    )

    return (
        <div>
            <Box className={'topbar'}>
                <CalendarViewMonthIcon sx={{ marginRight: '20px' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Views all Clubs!
                </Typography>
            </Box>
            <MaterialReactTable
                data={myData}
                columns={column}
                enableRowActions
                renderRowActions={
                    ({ row }) => (
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <IconButton color="primary" component={Link} to={`edit/${row.original.id}`}>
                                <EditIcon />
                            </IconButton>

                            <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    )}
            />
        </div>
    )
}

export default Home