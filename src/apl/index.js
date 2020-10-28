import {
    request
} from "../apl/core"
import apl from "../apl/path"

const APP = {
    //方法
    banner() {
        return request(apl.METHODS.GET, apl.URL.Banner);
    },
    getteacher() {
        return request(apl.METHODS.GET, apl.URL.GETteacher, {});
    },
<<<<<<< HEAD
    course(){
        return request(apl.METHODS.GET,apl.URL.course)
    }
=======
    login(params) {
        return request(apl.METHODS.POST, apl.URL.Login,params);
    }

>>>>>>> 1611c28b2e84e0ad16e8343cf7ed7b324959c59e
}

export default APP