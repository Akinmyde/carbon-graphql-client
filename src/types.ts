export type Consumption = {
    id: number;
    timestamp: string;
    value: number;
}

export type ConsumptionQueryResponse = {
    consumptions: Consumption[];
}
