import type { ConfigProviderProps } from './config-provider-props';
import type { InjectionKey, Ref } from 'vue';
export type ConfigProviderContext = Partial<ConfigProviderProps>;
export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;
