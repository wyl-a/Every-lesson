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
    course(){
        return request(apl.METHODS.POST,apl.URL.course)
    },
    login(params) {
        return request(apl.METHODS.POST, apl.URL.Login,params);
    },
    register(params) {
        return request(apl.METHODS.POST, apl.URL.Register,params);
    },
}

export default APP