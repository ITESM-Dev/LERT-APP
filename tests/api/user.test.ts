import axios from "axios"
import { api } from "~store/api"
import { store } from "~store/store"

import { API_URL } from "~utils/constants"

test("Test", () => {
    
})

/*test("Get User Info call", async () => {
    const response = await axios.get(API_URL + "user?id=123abc%23")

    expect(response.status)
        .toBe(200)

    expect(response.data.toString())
        .toBe({
            id: "1",
            name: "Rafael Gomez",
            mail: "rafa@tec.mx",
            role: "OPManager"
        }.toString())
})*/