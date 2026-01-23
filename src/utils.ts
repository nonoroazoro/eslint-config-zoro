/**
 * Dynamic import a package.
 *
 * @template T Package type.
 *
 * @param {string} name Package name.
 */
export async function importPackage<T>(name: string): Promise<T>
{
    try
    {
        const mod: { default?: T; } = await import(name);
        return mod.default ?? mod as T;
    }
    catch
    {
        throw new Error(`[eslint-config-zoro] Failed to import package: ${name}`);
    }
}
