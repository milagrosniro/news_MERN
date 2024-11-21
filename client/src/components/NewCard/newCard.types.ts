import { INew } from "../../stores/newSlice/newSlice.types";

export interface INewCardProps {
    _new: INew,
    titleButton: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onclickButton: (value: any) => any
}