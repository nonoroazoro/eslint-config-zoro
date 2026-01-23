import
{
    ESLINT_PRESET,
    NODE_PRESET,
    PERFECTIONIST_PRESET,
    REACT_PRESET,
    STYLISTIC_PRESET,
    TYPESCRIPT_PRESET
} from "./configs";

import type { Config, UserConfig } from "./types";

/**
 * Always enabled, cannot be opted out.
 */
const REQUIRED_PRESETS = [
    ESLINT_PRESET,
    STYLISTIC_PRESET,
    PERFECTIONIST_PRESET
];

/**
 * Enabled by user opt-in.
 */
const OPTIONAL_PRESETS = [
    NODE_PRESET,
    REACT_PRESET,
    TYPESCRIPT_PRESET
];

export async function defineConfig(config?: UserConfig): Promise<Config[]>
{
    const presets = [...REQUIRED_PRESETS];
    if (config != null)
    {
        presets.push(...OPTIONAL_PRESETS.filter(preset => config[preset.name as keyof UserConfig]));
    }

    const configs: Config[] = [];

    for (const preset of presets)
    {
        configs.push(...await preset.load());
    }

    if (config == null)
    {
        return configs;
    }

    const { ignores, node, react, typescript, ...globalConfig } = config;

    if (ignores)
    {
        configs.push({ ignores });
    }

    if (Object.keys(globalConfig).length > 0)
    {
        configs.push(globalConfig);
    }

    return configs;
}
