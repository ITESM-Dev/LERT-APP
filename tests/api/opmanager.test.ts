import axios from "axios"
import { API_URL } from "~utils/constants"

const MAIL = "opmanager@test.com"
const PASSWORD = "test"

test("Types", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getBandTypes`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("ICAS", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getIcas`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Expense Types", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getExpenseTypes`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Extra Hour Types", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getHourTypes`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

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
        `${API_URL}getManagers`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Current Periods", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getCurrentPeriods`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Available Managers", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getAvailableManagersICA`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Managers No Op Manager", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getManagersNoOpManager`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Managers No ICA Admin", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getManagersNoIcaAdmins`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("ICA Admins", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getICAAdmins`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})

test("Managers & ICA Admins", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getManagerAndIcaAdmins`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
})