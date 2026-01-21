import
{
    ESLINT_CONFIGS,
    NODE_CONFIGS,
    PERFECTIONIST_CONFIGS,
    REACT_CONFIGS,
    STYLISTIC_CONFIGS,
    TYPESCRIPT_CONFIGS
} from "./configs";

import type { Config, UserConfig } from "./types";

/**
 * Enabled by default and cannot be opted out.
 */
const CORE_PRESETS: Config[] = [
    ...ESLINT_CONFIGS,
    ...STYLISTIC_CONFIGS,
    ...PERFECTIONIST_CONFIGS
];

/**
 * Enabled by user opt-in.
 */
const OPTIONAL_PRESETS = {
    "node": NODE_CONFIGS,
    "react": REACT_CONFIGS,
    "typescript": TYPESCRIPT_CONFIGS
};

export function defineConfig(config?: UserConfig): Config[]
{
    const configs = [...CORE_PRESETS];

    if (config?.ignores)
    {
        configs.push({ ignores: config.ignores });
    }

    if (config == null)
    {
        return configs;
    }

    const { ignores, node, react, typescript, ...globalConfig } = config;
    for (const name of Object.keys(OPTIONAL_PRESETS) as Array<keyof typeof OPTIONAL_PRESETS>)
    {
        if (config[name])
        {
            configs.push(...OPTIONAL_PRESETS[name]);
        }
    }

    if (Object.keys(globalConfig).length > 0)
    {
        configs.push(globalConfig);
    }

    return configs;
}
