import axios from "axios"
import { API_URL } from "~utils/constants"

const MAIL = "manager@test.com"
const PASSWORD = "test"

test("Employees", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getResources`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
})

test("Expenses", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getExpenses`,
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
})

test("Expenses for Quarter", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.post(
        `${API_URL}expensesForQuarter`,
        {
            year: "2022"
        },
        {
            headers: {
                mail: user.mail,
                token: user.token
            }
        }
    )

    expect(response.status).toBe(200)
    expect(Object.keys(response.data).length).toBe(4)
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

test("Available Resources", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getAvailableResources`,
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

test("ICA Admin - Manager", async() => {
    const userResponse = await axios.post(
        `${API_URL}login`, 
        {
            "mail": MAIL,
            "password": PASSWORD
        }
    )
    const user = userResponse.data

    const response = await axios.get(
        `${API_URL}getICAAdminManager`,
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