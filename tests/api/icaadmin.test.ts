import axios from "axios"
import { API_URL } from "~utils/constants"

const MAIL = 'icaAdmin@lert.com';
const PASSWORD = 'password';

const MANAGER_MAIL = 'manager@lert.com';

test("Managers", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getManagersIcaAdmin`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
})

test("Log in as Manager", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const tokenResponse = await axios.post(
        `${API_URL}assignTokenAuthenticator`,
        {
            managerMail: MANAGER_MAIL,
        },
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(tokenResponse.status).toBe(200)
    expect(tokenResponse.data).toBeDefined()

    const response = await axios.post(
        `${API_URL}loginICAAdmin`,
        {
            mailManager: MANAGER_MAIL,
            token: tokenResponse.data
        },
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
    expect(Object.keys(response.data).length).toBe(7)
})