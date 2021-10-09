import { makeObservable, action, observable, computed } from 'mobx';
class GlobalStore {

    SetLocalStorage(date) {
        localStorage.setItem('TOKEN', date)
    }

    GetLocalStorage() {
        localStorage.setItem('TOKEN')
    }

    async AuthFromToken() {
        const token = this.GetLocalStorage()
        if (token) {

        }
    }


    constructor() {
        makeObservable(this, {
            // Values: observable,
            // FullPrice: computed,
            // ItemFromId: computed,
            // UpdateCnt: action,
        })
    }
}
export default new GlobalStore()