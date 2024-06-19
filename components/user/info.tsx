import { getImgSource } from "@/utils"

export const UserHead = (props: {
    headUrl: string,
    height?: number,
    width?: number
}) => {
    return (
        <img
            className="rounded-full"
            alt="head"
            src={getImgSource(props.headUrl)}
            height={props.height ?? 96}
            width={props.width ?? 96}
        />
    )
}