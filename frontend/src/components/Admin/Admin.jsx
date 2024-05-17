import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuthRequest } from '../../api_helpers/api_helpers'

const Admin = () => {

    const getData = (data) => {
        console.log("Admin", data)
        sendAdminAuthRequest(data.inputs).then((res) => console.log(res)).catch((error) => console.log(error))
    }

    return (
        <div>
            <AuthForm onSubmit={getData} isAdmin={true} />

        </div>
    )
}

export default Admin