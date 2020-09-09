import request from "./request";
export function getHomemultiData() {
    return request({
        url: "/home/multidata"
    })
}
export function getData(type,page) {
    return request({
        url: "/home/data",
        params: {
          type,
          page
        }
    })
}