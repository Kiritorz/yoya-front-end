export const getImgSource = (url: string) => {
    return `${process.env.NODE_ENV === "production" ? '/yoya-front-end' : ''}${url}`
}