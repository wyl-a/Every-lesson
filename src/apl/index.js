import {
    request
} from "../apl/core"
import apl from "../apl/path"

const APP = {
    banner(){
        return request(apl.METHODS.GET,apl.URL.Banner);
    }
}

export default APP