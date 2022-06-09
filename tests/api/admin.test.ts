import axios from "axios"
import { API_URL } from "~utils/constants"

test("User Roles", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": "admin@test.com",
            "password": "test"
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getAllUsers`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
})