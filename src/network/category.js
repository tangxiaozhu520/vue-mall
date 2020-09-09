import request from "./request";
export function getMenu() {
    return request({
        url:"/category"
    })
}
export function getCateGoods(maitKey) {
    return request({
        url:"/subcategory",
        params:{
            maitKey
        }
    })
}
export function goodsDetail(miniWallkey,type) {
    return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}