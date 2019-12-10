/// <reference types="jquery" />
import { PdSDKPluginSettings } from '../plugin';
import { PdVisPlugin, PdVisPluginSettings } from '../../../../vis/netchart/plugins';
import { PdVisNetChart } from '../../../../vis/netchart/netchart';
import { PdSDKAjaxSettings, PdSDKKGSettings } from '../../../utils/service';
import { PdSDKNetChartData, PdSDKNetChartDataNode } from '../../model';
/**
 *  鹰眼图插件配置
 */
export interface PdSDKPluginMapxSettings extends PdVisPluginSettings, PdSDKPluginSettings, PdSDKKGSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 请求参数处理函数
     */
    handleParams?: (ajaxSettings: PdSDKAjaxSettings, nodeData: PdSDKNetChartDataNode) => PdSDKAjaxSettings;
    /**
     *  新请求的数据与原数据是否融合
     */
    isMerge?: boolean;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
}
/**
 * 鹰眼图插件
 */
export declare class PdSDKPluginMapx extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginMapxSettings;
    /**
     * 鹰眼图的定时器
     */
    mapxInterval: any;
    /**
     *  配置
     */
    settings: PdSDKPluginMapxSettings;
    /**
     *  基础zoom的值
     */
    protected baseZoomValue: number;
    /**
     *  鼠标位置
     */
    protected client: {
        x: number;
        y: number;
    };
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  是否mapx
     */
    protected isMapx: boolean;
    /**
     *  zoom的值是否改变
     */
    protected isZoomChanged: boolean;
    /**
     *  mapx缓存
     */
    protected mapxCacheMap: {
        [key: string]: any;
    };
    /**
     *  原始数据
     */
    protected originalData: PdSDKNetChartData;
    /**
     *  zoom的值
     */
    protected zoomValue: number;
    /**
     * 构造方法
     * @param {PdSDKPluginMapxSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginMapxSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 获取鼠标接近的节点
     */
    protected getNode(): PdSDKNetChartDataNode;
    protected initSettings(settings?: PdSDKPluginMapxSettings): PdSDKPluginMapxSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 加载额外的数据
     * @param nodeData
     */
    protected loadExtraData(nodeData: PdSDKNetChartDataNode): Promise<any>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 恢复数据
     */
    protected recoverData(): void;
}
