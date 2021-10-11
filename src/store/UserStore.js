import { makeObservable, action, observable, computed, runInAction } from 'mobx';
import { Send } from '../api/Send';
import GlobalStore from './GlobalStore';
class UserStore {
    userData = {
        auth: false,
        token: '',
        full_name: '',
    }
    setUserValues(new_token, new_full_name) {
        this.userData.token = new_token
        this.userData.auth = true
        this.userData.full_name = new_full_name
    }
    async Registration(date) {
        const result_send = await Send(date)
        if (!result_send) return false
        let auth_token = result_send
        runInAction(() => {
            this.setUserValues(auth_token, date.full_name)
            GlobalStore.SetLocalStorage(auth_token)
        })
        return true
    }

    exit() {
        this.userData = {
            auth: false,
            token: '',
            full_name: '',
        }
    }

    get FullName() {
        return this.userData.full_name
    }
    get isAuth() {
        return this.userData.auth
    }

    get Token() {
        return this.userData.token
    }

    constructor() {
        makeObservable(this, {
            userData: observable,
            isAuth: computed,
            exit: action,
            FullName: computed,
            Token: computed,
            Registration: action,
            setUserValues: action,
        })
    }
}

export default new UserStore()