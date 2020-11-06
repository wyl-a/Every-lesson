import {
    request
} from "../apl/core"
import apl from "../apl/path"

const APP = {
    home() {
        return request(apl.METHODS.GET, apl.URL.Home)
    },
    banner() {
        return request(apl.METHODS.GET, apl.URL.Banner);
    },
    getteacher() {
        return request(apl.METHODS.GET, apl.URL.GETteacher, {});
    },
    course() {
        return request(apl.METHODS.POST, apl.URL.course);
    },
    login(params) {
        return request(apl.METHODS.POST, apl.URL.Login, params);
    },
    smsCode(params) {
        return request(apl.METHODS.POST, apl.URL.SmsCode, params);
    },
    change(params) {
        return request(apl.METHODS.POST, apl.URL.Change, params);
    },
    teacher(id) {
        return request(apl.METHODS.GET, apl.URL.Teacher + id);
    },
    courseInfo(id) {
        return request(apl.METHODS.GET, apl.URL.CourseInfo + id);
    },
    collectOK(params) {
        return request(apl.METHODS.POST, apl.URL.CollectOK, params);
    },
    collectNO(params) {
        return request(apl.METHODS.PUT, '/api/app/collect/cancel/' + params + '/1');
    },
    collect() {
        return request(apl.METHODS.GET, apl.URL.Collect);
    },
    teaCollect(id) {
        return request(apl.METHODS.GET, apl.URL.TeaCollect + id);
    },
    collects() {
        return request(apl.METHODS.GET, apl.URL.Collects);
    },
    downOrder(params) {
        return request(apl.METHODS.POST, apl.URL.DownOrder, params);
    },
    courseClassify() {
        return request(apl.METHODS.GET, apl.URL.CourseClassify);
    },
    courseBasis(params) {
        return request(apl.METHODS.GET, apl.URL.CourseBasis, params);
    },
    courseSearch(text) {
        return request(apl.METHODS.GET, apl.URL.CourseSearch + text);
    },
    userInfo() {
        return request(apl.METHODS.GET, apl.URL.UserInfo);
    },
    user(params) {
        return request(apl.METHODS.PUT, apl.URL.User,params);
    },
    sonArea(id) {
        return request(apl.METHODS.GET, apl.URL.SonArea + id);
    },
    Learn_now(id) {
        return request(apl.METHODS.GET, apl.URL.Learn_now + id);
    },
}

export default APP