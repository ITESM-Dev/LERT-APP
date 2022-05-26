import axios from "axios"
import { api } from "~store/api"
import { store } from "~store/store"

test("Get User Info call", async () => {
    const response = await axios.get("https://8d2c5050-cba1-4e25-9d34-f4c69d3a4a02.mock.pstmn.io/user?id=123abc%23")

    expect(response.status)
        .toBe(200)

    expect(response.data.toString())
        .toBe({
            id: "1",
            name: "Rafael Gomez",
            mail: "rafa@tec.mx",
            role: "Bichota"
        }.toString())
})