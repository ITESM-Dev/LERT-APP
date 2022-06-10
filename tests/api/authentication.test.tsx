import { act, renderHook } from "@testing-library/react-hooks"
import axios from "axios"
import { Provider } from "react-redux"
import { api, useLoginQuery } from "~store/api"
import { store } from "~store/store"
import { API_URL } from "~utils/constants"

test("Login", async () => {

    const response = await axios.post(
        `${API_URL}login`, 
        {
            "mail": "admin@test.com",
            "password": "testPassword"
        }
    )
    const user = response.data

    expect(response.status).toBe(200)
})

test("Logout", async () => {
    const response = await axios.post(
        `${API_URL}login`, 
        {
            "mail": "admin@test.com",
            "password": "testPassword"
        }
    )
    const user = response.data

    expect(response.status).toBe(200)

    const logoutRes = await axios.get(`${API_URL}logout`, {
        headers: {
            mail: user.mail,
            token: user.token
        }
    })

    expect(logoutRes.status).toBe(200)
})