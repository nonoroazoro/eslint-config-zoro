import type { Config } from "./Config";

export interface Preset
{
    name: string;
    dependencies: string[];
    load: () => Config[] | Promise<Config[]>;
}
