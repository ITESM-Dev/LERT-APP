import "whatwg-fetch";
import { store } from "~store/store"
import { UserType, setUser } from "~store/user";

test("Set User Action", () => {

    const newUser: UserType = {
        id: "1",
        name: "Rafael Gomez",
        mail: "rafa@tec.mx",
        role: "Manager"
    }
    
    store.dispatch(setUser(newUser))

    expect(store.getState().user).toMatchObject(newUser)
})