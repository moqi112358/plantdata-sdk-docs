import { PdVisViewSettings } from '../../../vis/netchart/view';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdSDKNetChart } from '../netchart';
/**
 * SDK 视图配置
 */
export interface PdSDKViewSettings extends PdVisViewSettings {
    /**
     * SDK 网络关系图实例
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
}
