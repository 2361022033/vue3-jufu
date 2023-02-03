import myAxios from "./http";

//登入
export  function login(paramsList) {
    return myAxios({
        url: '/user/login',
        method: 'post',
        data: paramsList
    })
}
