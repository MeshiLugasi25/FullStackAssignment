export interface IRead {
    timestamp: Date;
    value : number;
    type : string;
    anomaly : boolean
}
export enum TypeCore{
    Sine,
    State
}
