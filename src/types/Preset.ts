import type { Config } from "./Config";

export interface Preset
{
    name: string;
    load: () => Config[] | Promise<Config[]>;
}
