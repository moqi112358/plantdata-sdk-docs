/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
import { PdColorHSB, PdColorRGB, PdColorType } from '../../../common/color';
/**
 * 颜色选择组件配置
 */
export interface PdVisColorPickerSettings extends PdComponentSettings {
    /**
     * 原颜色
     */
    color?: PdColorType;
    /**
     * 面板布局，可选值full标识完整的面板 | hex仅显示Hex的配置内容
     */
    layout?: 'full' | 'hex';
    /**
     * 实时预览选择颜色的结果
     */
    livePreview?: boolean;
    /**
     * 颜色变化时的回调方法
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @param {string} hex - Hex格式的颜色
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @param {PdVisColorPicker} ins - 颜色选择器的实例
     * @param {boolean} code -  是否代码触发
     */
    onChange?: (hsb: PdColorHSB, hex: string, rgb: PdColorRGB, ins: PdVisColorPicker, code: boolean) => void;
    /**
     * 确认修改颜色时的回调方法
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @param {string} hex - Hex格式的颜色
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @param {PdVisColorPicker} ins - 颜色选择器的实例
     */
    onSubmit?: (hsb: PdColorHSB, hex: string, rgb: PdColorRGB, ins: PdVisColorPicker) => void;
    /**
     *  生成颜色选择组件的容器
     */
    parent?: PdSelector;
    /**
     * 是否存在确认按钮
     */
    submitEnable?: boolean;
    /**
     * 确认按钮的文字
     */
    submitText?: string;
    /**
     * 触发颜色选择面板的元素
     */
    trigger?: PdSelector;
}
/**
 * 颜色选择组件
 */
export declare class PdVisColorPicker extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisColorPickerSettings;
    /**
     *  配置项
     */
    settings: PdVisColorPickerSettings;
    /**
     * 透明度面板
     */
    protected $alpha: JQuery;
    /**
     * 原颜色面板
     */
    protected $currentColor: JQuery;
    /**
     * 颜色输入面板
     */
    protected $fields: JQuery<HTMLInputElement>;
    /**
     * Hue颜色面板
     */
    protected $hue: JQuery;
    /**
     * 新颜色面板
     */
    protected $newColor: JQuery;
    /**
     * 颜色选择面板
     */
    protected $selector: JQuery;
    /**
     * 颜色选择面板选择按钮
     */
    protected $selectorIndic: JQuery;
    /**
     * 新颜色
     */
    protected color: PdColorHSB;
    /**
     * 原颜色
     */
    protected currentColor: PdColorHSB;
    /**
     * 实例销毁事件
     */
    protected destroyEvent: () => void;
    /**
     * 颜色选择面板的高度
     */
    protected height: number;
    /**
     * Alpha颜色选择面板鼠标移动事件
     */
    protected moveAlphaEvent: (event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) => void;
    /**
     * Hue颜色选择面板鼠标移动事件
     */
    protected moveHueEvent: (event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) => void;
    /**
     * 颜色输入面板鼠标移动事件
     */
    protected moveIncrementEvent: (event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) => void;
    /**
     * 颜色选择面板鼠标移动事件
     */
    protected moveSelectorEvent: (event: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) => void;
    /**
     * 是否IE且版本小于10
     */
    protected ngIE: boolean;
    /**
     * Alpha颜色选择面板鼠标放开事件
     */
    protected upAlphaEvent: (event: JQuery.MouseUpEvent | JQuery.TouchEndEvent) => void;
    /**
     * Hue颜色选择面板鼠标放开事件
     */
    protected upHueEvent: (event: JQuery.MouseUpEvent | JQuery.TouchEndEvent) => void;
    /**
     * 颜色输入面板鼠标放开事件
     */
    protected upIncrementEvent: (event: JQuery.MouseUpEvent | JQuery.TouchEndEvent) => void;
    /**
     * 颜色选择面板鼠标放开事件
     */
    protected upSelectorEvent: (event: JQuery.MouseUpEvent | JQuery.TouchEndEvent) => void;
    /**
     * 生成线性渐变样式的字符串
     * @param {string} colorStr - 渐变颜色
     */
    protected static createGradient(colorStr: string): string;
    /**
     * 构造方法
     * @param {PdVisColorPickerSettings} settings - 用户配置
     */
    constructor(settings?: PdVisColorPickerSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 设置当前和已选择的颜色
     * @param {PdColorType} color - 颜色
     * @param {boolean} setCurrent - 是否更新原颜色
     */
    setColor(color: PdColorType, setCurrent?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 颜色变化时触发的事件
     * @param {HTMLInputElement} ele - 触发事件的元素
     */
    protected change(ele: HTMLInputElement): void;
    /**
     * 填充Alpha颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillAlphaFields(hsb: PdColorHSB): void;
    /**
     * 填充HSB颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillHSBFields(hsb: PdColorHSB): void;
    /**
     * 填充Hex颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillHexFields(hsb: PdColorHSB): void;
    /**
     * 填充RGB颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillRGBFields(hsb: PdColorHSB): void;
    /**
     * 初始化配置
     * @param {PdVisColorPickerSettings} settings - 用户定义配置
     * @return {PdVisColorPickerSettings} 配置
     */
    protected initSettings(settings: PdVisColorPickerSettings): PdVisColorPickerSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 重置为原颜色
     */
    protected restoreToCurrent(): void;
    /**
     * 设置Alpha颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setAlpha(hsb: PdColorHSB): void;
    /**
     * 设置Alpha颜色选择面板的背景颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setAlphaSelector(hsb: PdColorHSB): void;
    /**
     * 设置原颜色面板的颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setCurrentColor(hsb: PdColorHSB): void;
    /**
     * 设置Hue颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setHue(hsb: PdColorHSB): void;
    /**
     * 设置新颜色面板的颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setNewColor(hsb: PdColorHSB): void;
    /**
     * 设置颜色选择面板的颜色和选择按钮位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setSelector(hsb: PdColorHSB): void;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新颜色选择框中的颜色
     * @param {PdColorType} color - 颜色
     * @param {boolean} setCurrent - 是否更新原颜色
     */
    protected updateColor(color: PdColorType, setCurrent?: boolean): void;
}
