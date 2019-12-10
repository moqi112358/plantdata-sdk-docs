import { PdVisPlugin, PdVisPluginSettings } from '../../../vis/netchart/plugins';
import { PdSDKNetChart } from '../netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
/**
 * SDK 插件配置
 */
export interface PdSDKPluginSettings extends PdVisPluginSettings {
    /**
     * SDK 网络关系图实例
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
}
/**
 * SDK 插件
 */
export declare abstract class PdSDKPlugin extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginSettings;
    /**
     * 初始化配置
     * @param {PdSDKPluginSettings} settings - 用户定义配置
     * @return {PdSDKPluginSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginSettings): PdSDKPluginSettings;
}
