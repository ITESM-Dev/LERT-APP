import axios from "axios"
import { api } from "~store/api"
import { store } from "~store/store"

import { API_URL } from "~utils/constants"

test("Test", () => {
    
})

test("Get User Info call", async () => {

    const loginResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": "admin@test.com",
            "password": "test"
        }
    )
    const user = loginResponse.data
    expect(loginResponse.status)
        .toBe(200)

    const response = await axios.get(API_URL + "getUserInfo", {
        headers: {
            mail: "admin@test.com",
            token: user.token
        }
    })

    expect(response.status)
        .toBe(200)

})