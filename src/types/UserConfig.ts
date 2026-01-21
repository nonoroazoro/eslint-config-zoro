import type { Config } from "./Config";

export interface UserConfig extends Config
{
    /**
     * Enable `TypeScript` config.
     *
     * @default false
     */
    typescript?: boolean;

    /**
     * Enable `React` config.
     *
     * @default false
     */
    react?: boolean;

    /**
     * Enable `Node` config.
     *
     * @default false
     */
    node?: boolean;
}
