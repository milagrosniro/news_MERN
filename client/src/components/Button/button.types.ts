import { IBodyParam, INew } from "../../stores/newSlice/newSlice.types";

export interface IButtonProps{
    title: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onclick: (value:any) => any,
    id: INew['_id'],
    body: IBodyParam
}