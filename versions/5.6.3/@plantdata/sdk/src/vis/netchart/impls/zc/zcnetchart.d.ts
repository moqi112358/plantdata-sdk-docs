import { BaseMouseEvent, ItemsChartLink, ItemsChartNode, NetChart, NetChartChartClickEventArguments, NetChartDataObject, NetChartDataObjectLink, NetChartDataObjectNode, NetChartSettings } from '../../zcnetchart';
import { PdVisNetChart, PdVisNetChartChartNodeSettings, PdVisNetChartChartSettings, PdVisNetChartDataLink, PdVisNetChartDataNode, PdVisNetChartSettings, PdVisNodeId } from '../../netchart';
import { PdVisChartTypeUnion } from '../../../chart';
import { PdVisNodeLegendItem } from '../../plugins/legend/node-legend/node-legend';
import { PdVisLinkLegendItem } from '../../plugins/legend/link-legend';
/**
 * ZcNetChart网络关系图节点配置
 */
export interface PdVisZcNetChartChartNodeSettings extends PdVisNetChartChartNodeSettings {
    /**
     *  自动分割节点名称
     */
    autoSplit?: boolean;
    /**
     *  节点图标
     */
    icon?: {
        [key: string]: PdVisChartTypeUnion;
    };
    /**
     * 节点图片转换方法
     * @param {string} url - 原始节点图片地址
     * @param {PdVisNetChartDataNode} nodeData - 节点数据
     * @return {string} 节点图片地址
     */
    imgBuilder?: (url: string, nodeData?: PdVisNetChartDataNode) => string;
    /**
     *  节点显示图片时自动填充的颜色
     */
    imgFillColor?: string;
    /**
     *  节点颜色配置
     */
    textColors?: {
        [key: string]: PdVisChartTypeUnion;
    };
}
/**
 * ZcNetChart网络关系图配置
 */
export interface PdVisZcNetChartChartSettings extends PdVisNetChartChartSettings {
    /**
     *  自动重新布局
     */
    autoResetLayout?: boolean;
    /**
     *  节点配置
     */
    nodeSettings?: PdVisZcNetChartChartNodeSettings;
    /**
     *  主面板配置项
     */
    settings?: NetChartSettings;
    /**
     *  工具栏配置
     */
    toolbarSettings?: {
        /**
         *  默认展开工具列表
         */
        expand?: string[];
        /**
         *  尺寸
         */
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    };
}
/**
 * ZcNetChart网络关系图组件配置
 */
export interface PdVisZcNetChartSettings extends PdVisNetChartSettings {
    /**
     *  ZcNetChart网络关系图配置
     */
    main?: PdVisZcNetChartChartSettings;
}
/**
 * ZcNetChart网络关系图数据
 */
export interface PdVisZcNetChartData extends NetChartDataObject {
}
/**
 * ZcNetChart网络关系图节点数据
 */
export interface PdVisZcNetChartDataNode extends PdVisNetChartDataNode, NetChartDataObjectNode {
    /**
     * 唯一标识
     */
    id: string;
}
/**
 * ZcNetChart网络关系图关系数据
 */
export interface PdVisZcNetChartDataLink extends PdVisNetChartDataLink, NetChartDataObjectLink {
    /**
     *  关系起点
     */
    from: string;
    /**
     *  关系终点
     */
    to: string;
}
/**
 * ZcNetChart网络关系图关系
 */
export interface PdVisZcNetChartChartLink extends ItemsChartLink {
    /**
     *  关系数据
     */
    data: PdVisZcNetChartDataLink;
}
/**
 * ZcNetChart网络关系图节点
 */
export interface PdVisZcNetChartChartNode extends ItemsChartNode {
    /**
     *  节点数据
     */
    data: PdVisZcNetChartDataNode;
}
/**
 * ZcNetChart网络关系图组件
 */
export declare class PdVisZcNetChart extends PdVisNetChart {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisZcNetChartSettings;
    /**
     *  ZcNetChart网络关系图实例
     */
    chart: NetChart;
    /**
     *  当前数据
     */
    data: PdVisZcNetChartData;
    /**
     *  配置
     */
    settings: PdVisZcNetChartSettings;
    /**
     *  是否启用工具栏
     */
    toolbarEnable: boolean;
    /**
     * 高亮路径数据
     */
    protected highlightPathData: {
        nodesId: PdVisNodeId[];
        linksId: string[];
    };
    /**
     * 节点最后的display状态
     */
    protected lastDisplay: string;
    /**
     * 构造方法
     * @param {PdVisZcNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisZcNetChartSettings);
    /**
     * 返回上一步
     */
    back(): void;
    /**
     * 清空历史
     */
    clearHistory(): void;
    /**
     * 使返回按钮可active
     */
    enableBack(): void;
    /**
     * 获取节点的间隔距离
     */
    getNodeSpacing(): number;
    /**
     * 获取层距
     */
    getRowSpacing(): number;
    /**
     * 跳转到指定的历史位置
     * @param {number} i - 历史数据所在位置
     */
    goHistory(i: number): void;
    /**
     * 高亮路径
     * @param {PdVisNodeId[]} fromIds - 起点
     * @param {PdVisNodeId} toId - 终点id
     * @param isShort - 是否是最短路径
     */
    highlightPath(fromIds: PdVisNodeId[], toId: PdVisNodeId, isShort?: boolean): void;
    /**
     * 边的默认距离
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 默认距离
     */
    linkDefaultLength(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): number;
    /**
     * 关系样式渲染
     * @param {PdVisZcNetChartChartLink} link - 关系
     */
    linkStyleFunction(link: PdVisZcNetChartChartLink): void;
    /**
     * 节点的默认边框颜色
     * @param {PdVisNetChartDataNode} nodeData - 图例
     * @return {string} - 默认边框颜色
     */
    nodeDefaultLineColor(nodeData?: PdVisNetChartDataNode): string;
    /**
     * 计算节点的展示形式
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的展示形式
     */
    nodeDisplay(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点图片
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 图片
     */
    nodeImage(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点标签的默认颜色
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认颜色
     */
    nodeLabelDefaultColor(legend?: PdVisNodeLegendItem): string;
    /**
     * 获取节点标签显示位置
     * @param {PdVisNetChartDataNode} node - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点标签显示位置
     */
    nodeLabelPosition(node?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 是否支持更新节点标签显示位置
     * @return {boolean} 是否支持更新
     */
    nodeLabelPositionUpdatable(): boolean;
    /**
     * 节点样式渲染
     * @param {PdVisZcNetChartChartNode} node - 节点
     */
    nodeStyleFunction(node: PdVisZcNetChartChartNode): void;
    /**
     * 重置布局
     */
    resetLayout(): void;
    /**
     * 重置图表的尺寸
     */
    resize(): void;
    /**
     * 还原快照
     */
    restoreSnapshot(idx: number): void;
    /**
     * 设置中心焦点
     * @param {PdVisNetChartDataNode} node - 焦点
     */
    scrollIntoView(node: PdVisZcNetChartDataNode): void;
    /**
     * 拍摄快照
     */
    takeSnapshot(name: string, desc: string): void;
    /**
     * 更新返回按钮状态
     */
    updateBackStatus(): void;
    /**
     * 更新图表
     */
    updateChart(): void;
    /**
     * 更新图表数据
     */
    updateData(): void;
    /**
     * 更新图表数据的布局
     */
    updateLayout(layout: string): void;
    /**
     * 更新锁定按钮状态
     */
    updateLockStatus(): void;
    /**
     * 更新节点标签显示位置
     * @param {string} position - 标签显示位置
     */
    updateNodeLabelPosition(position: string): void;
    /**
     * 更新节点距离
     * @param {number} nodeSpacing - 间距
     */
    updateNodeSpacing(nodeSpacing: number): void;
    /**
     * 更新层距
     * @param {number} rowSpacing - 层距
     */
    updateRowSpacing(rowSpacing: number): void;
    /**
     * 更新图表的样式
     */
    updateStyle(): void;
    /**
     * 生成工具栏项目的class
     * @param {string} item - 工具栏项目
     * @param {string} cls - 工具栏项目额外的class
     * @return {string} 工具栏项目的class
     */
    protected buildToolbarCss(item: string, cls?: string): string;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 绘制ZcNetChart的网络关系图的数据
     */
    protected draw(): void;
    /**
     * 获取全部高亮路径
     * @param {PdVisNodeId[]} fromIds - 起点
     * @param {PdVisNodeId} toId - 终点id
     * @param linksGroup - 图谱数据
     */
    protected getAllHighlightPathData(fromIds: PdVisNodeId[], toId: PdVisNodeId, linksGroup: {
        [key: string]: PdVisNetChartDataLink[];
    }): void;
    /**
     * 获取最短高亮路径
     * @param {PdVisNodeId[]} fromIds - 起点
     * @param {PdVisNodeId} toId - 终点id
     */
    protected getShortHighlightPathData(fromIds: PdVisNodeId[], toId: PdVisNodeId): void;
    /**
     * 初始化图表
     */
    protected initChart(): void;
    /**
     * 初始化配置
     * @param {PdVisZcNetChartSettings} settings - 用户定义配置
     * @return {PdVisZcNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisZcNetChartSettings): PdVisZcNetChartSettings;
    /**
     * 工具栏项目是否可见
     * @param {string} item - 工具栏项目
     * @return {boolean} - 是否可见
     */
    protected isVisibleTool(item: string): boolean;
    /**
     * 双击图上的节点事件
     * @param {BaseMouseEvent} event - 事件对象
     * @param {NetChartChartClickEventArguments} args - 事件关联的参数
     */
    protected onDoubleClick(event: BaseMouseEvent, args: NetChartChartClickEventArguments): void;
    /**
     * 覆盖工具栏配置
     */
    protected resetToolbarSettings(): void;
    /**
     * 分割节点标签
     * @param {string} label - 标签文字
     * @return {string} 分割后的结果
     */
    protected splitText(label: string): string;
}
