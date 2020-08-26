import request  from '@/utils/http-jsonp'
export function getMapData(url, data) {
    return request(url, data)
}