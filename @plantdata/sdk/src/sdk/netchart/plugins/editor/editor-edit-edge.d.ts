/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt/tag-prompt';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
import { PdSDKAjaxSettings } from '../../../utils/service';
import { PdSDKResultVO } from '../../../utils/model';
/**
 * 边属性编辑工具配置
 */
export interface PdSDKEditorEditEdgeSettings extends PdSDKEditorToolSettings {
    /**
     * 添加边属性值配置
     */
    addEdgeSettings?: PdSDKAjaxSettings;
    /**
     * 删除边属性值配置
     */
    deleteEdgeSettings?: PdSDKAjaxSettings;
    /**
     * 获取属性信息
     */
    getDefinitionSettings?: PdSDKAjaxSettings;
    /**
     * 获取实体信息
     */
    getInstanceSettings?: PdSDKAjaxSettings;
    /**
     * 实体提示配置
     */
    instancePromptSettings?: PdSDKPromptSettings;
}
/**
 * 边属性编辑工具
 */
export declare class PdSDKEditorEditEdge extends PdSDKEditorTool {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorEditEdgeSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorEditEdgeSettings;
    /**
     * 选中link数据
     */
    protected data: PdSDKNetChartDataLink;
    /**
     * 属性数据
     */
    protected edgeData: any[];
    /**
     * 选中link数据
     */
    protected promptList: PdSDKTagPrompt[];
    static transformTime(time: string): string;
    /**
     * 构造方法
     * @param {PdSDKEditorEditEdgeSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorEditEdgeSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 添加边属性值
     * @param params - 边属性值
     */
    protected addEdge(params: any): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 添加边属性值
     * @param params - 边属性值
     */
    protected deleteEdge(params: any): Promise<void>;
    /**
     * 删除属性
     */
    protected getDefinition(): Promise<PdSDKResultVO<any>>;
    /**
     * 获取实例详情
     */
    protected getInstance(): Promise<any>;
    /**
     * 初始化配置
     * @param {PdSDKEditorEditEdgeSettings} settings - 用户定义配置
     * @return {PdSDKEditorEditEdgeSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorEditEdgeSettings): PdSDKEditorEditEdgeSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
    /**
     * 更新权重，置信度，来源
     */
    protected updateAttribute(): Promise<number>;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
