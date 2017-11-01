import fetch from '../utils/fetch'
export function bannerList(url,type) {
  return fetch({
    url:url,
    post:type
  })
}
