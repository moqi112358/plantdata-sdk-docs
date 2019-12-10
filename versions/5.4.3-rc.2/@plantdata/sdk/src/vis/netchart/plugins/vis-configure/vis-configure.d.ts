/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisSlider, PdVisSliderSettings } from '../../../utils/slider/slider';
import { PdVisNetChart } from '../../netchart';
import { PdSelector } from '../../../../common/common';
import { PdVisLinkLegendItem } from '../legend/link-legend/link-legend';
import { PdVisNodeLegendItem } from '../legend/node-legend/node-legend';
/**
 * 可视化配置插件配置
 */
export interface PdVisPluginVisConfigureSettings extends PdVisPluginSettings {
    /**
     * 排斥间距
     */
    linkLength?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 排斥间距配置
         */
        lengthSettings?: PdVisSliderSettings;
    };
    /**
     * 排斥间距
     */
    linkStyle?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 控件状态
         */
        control?: {
            /**
             * 边可见性
             */
            visible?: boolean;
            /**
             * 边颜色
             */
            color?: boolean;
            /**
             * 边宽度
             */
            radius?: boolean;
            /**
             * 边虚化
             */
            isVague?: boolean;
            /**
             * 边箭头
             */
            arrow?: boolean;
            /**
             * 边标签可见性
             */
            labelVisible?: boolean;
            /**
             * 边标签可颜色
             */
            labelColor?: boolean;
            /**
             * 边标签显示值
             */
            labelAtts?: boolean;
        };
    };
    /**
     * 节点标签位置
     */
    nodeDisplay?: {
        /**
         * 是否启用
         */
        enable?: boolean;
    };
    /**
     * 节点
     */
    nodeStyle?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 控件状态
         */
        control?: {
            /**
             * 节点可见性
             */
            visible?: boolean;
            /**
             * 节点颜色
             */
            color?: boolean;
            /**
             * 节点半径
             */
            radius?: boolean;
            /**
             * 节点虚化
             */
            isVague?: boolean;
            /**
             * 节点图片
             */
            image?: boolean;
            /**
             * 节点标签可见性
             */
            labelVisible?: boolean;
            /**
             * 节点标签可颜色
             */
            labelColor?: boolean;
            /**
             * 节点标签显示位置
             */
            labelPosition?: boolean;
        };
    };
}
/**
 * 可视化配置模块配置
 */
export declare class PdVisPluginVisConfigure extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginVisConfigureSettings;
    /**
     *  配置
     */
    settings: PdVisPluginVisConfigureSettings;
    /**
     * 显示所有边配置
     */
    protected allLinkShow: boolean;
    /**
     * 显示所有节点配置
     */
    protected allNodeShow: boolean;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 边距离设置器
     */
    protected lSlider: PdVisSlider;
    /**
     * 边距离设置器
     */
    protected lengthSlider: PdVisSlider;
    /**
     * 边配置选项
     */
    protected linkSettings: PdVisLinkLegendItem[];
    /**
     * 边配置选项显示类型
     */
    protected linkShowType: 'shape' | 'label';
    /**
     * 节点配置选项
     */
    protected nodeSettings: PdVisNodeLegendItem[];
    /**
     * 节点配置选项显示类型
     */
    protected nodeShowType: 'shape' | 'label';
    /**
     * 半径/宽度设置器
     */
    protected radiusSlider: PdVisSlider;
    /**
     * 构造方法
     * @param {PdVisPluginVisConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginVisConfigureSettings);
    /**
     * 添加配置
     * @param {PdSelector} title - 头部
     * @param {PdSelector} content - 主体
     * @param {string} type - 类型标识
     */
    addConfig(title: PdSelector, content: PdSelector, type: string): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 更新配置
     * @param {string} type - 类型标识
     * @param {{title?: PdSelector, content?: PdSelector}} delta - 变化的信息
     */
    updateConfig(type: string, delta?: {
        title?: PdSelector;
        content?: PdSelector;
    }): void;
    /**
     * 添加排斥间距配置面板
     */
    protected addLinkLengthPanel(): void;
    /**
     * 添加节点显示配置面板
     */
    protected addNodeDisplayPanel(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成配置面板
     */
    protected createConfigPanel(): void;
    /**
     * 生成关系/节点样式
     */
    protected createLinkNodeSettingsPanel(type?: 'node' | 'link'): string;
    /**
     * 生成边样式
     */
    protected createLinkSettingsPanel(): string;
    /**
     * 生成节点样式
     */
    protected createNodeSettingsPanel(): string;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginVisConfigureSettings} settings - 用户定义配置
     * @return {PdVisPluginVisConfigureSettings} 配置
     */
    protected initSettings(settings: PdVisPluginVisConfigureSettings): PdVisPluginVisConfigureSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 关系配置更新
     */
    protected linkSettingsChange(item: PdVisLinkLegendItem): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 节点配置更新
     */
    protected nodeSettingsChange(item: PdVisNodeLegendItem): void;
    /**
     * 更新关系配置面板
     */
    protected updateLinkConfigPanel(): void;
    /**
     * 更新关系配置
     */
    protected updateLinkSetting(): void;
    /**
     * 更新实体配置面板
     */
    protected updateNodeConfigPanel(): void;
    /**
     * 更新节点配置
     */
    protected updateNodeSetting(): void;
}
