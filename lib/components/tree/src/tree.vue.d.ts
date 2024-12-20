import type Node from './model/node';
import type { ComponentInternalInstance, PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils';
import type { TreeComponentProps, TreeData, TreeKey, TreeNodeData } from './tree.type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: PropType<TreeComponentProps["defaultCheckedKeys"]>;
    defaultExpandedKeys: PropType<TreeComponentProps["defaultExpandedKeys"]>;
    currentNodeKey: PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: PropType<TreeComponentProps["props"]>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: PropType<TreeComponentProps["load"]>;
    filterNodeMethod: PropType<TreeComponentProps["filterNodeMethod"]>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: PropType<string | import("vue").Component>;
    };
}, {
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bm: (blockSuffix?: string, modifier?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    store: import("vue").Ref<{
        currentNode: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./tree.type").FakeNode | Node, index?: number, batch?: boolean) => void;
            insertBefore: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
            insertAfter: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: () => void, expandParent?: boolean) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            eachNode: (callback: (node: Node) => void) => void;
            reInitChecked: () => void;
        };
        currentNodeKey: TreeKey;
        nodesMap: import("./tree.type").TreeStoreNodesMap;
        root: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./tree.type").FakeNode | Node, index?: number, batch?: boolean) => void;
            insertBefore: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
            insertAfter: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: () => void, expandParent?: boolean) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            eachNode: (callback: (node: Node) => void) => void;
            reInitChecked: () => void;
        };
        data: TreeNodeData[];
        lazy: boolean;
        load: import("./tree.type").LoadFunction;
        filterNodeMethod: import("./tree.type").FilterNodeMethodFunction;
        key: TreeKey;
        defaultCheckedKeys: TreeKey[];
        checkStrictly: boolean;
        defaultExpandedKeys: TreeKey[];
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        checkDescendants: boolean;
        props: {
            children?: string | undefined;
            label?: (string | ((data: TreeNodeData, node: Node) => string)) | undefined;
            disabled?: (string | ((data: TreeNodeData, node: Node) => boolean)) | undefined;
            isLeaf?: (string | ((data: TreeNodeData, node: Node) => boolean)) | undefined;
            class?: ((data: TreeNodeData, node: Node) => string | {
                [key: string]: boolean;
            }) | undefined;
        };
        initialize: () => void;
        filter: (value: import("./tree.type").FilterValue) => void;
        setData: (newVal: TreeData) => void;
        getNode: (data: TreeKey | TreeNodeData | Node) => Node;
        insertBefore: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node) => void;
        insertAfter: (data: TreeNodeData, refData: TreeKey | TreeNodeData | Node) => void;
        remove: (data: TreeNodeData | Node) => void;
        append: (data: TreeNodeData, parentData: TreeNodeData | TreeKey | Node) => void;
        _initDefaultCheckedNodes: () => void;
        _initDefaultCheckedNode: (node: Node) => void;
        setDefaultCheckedKey: (newVal: TreeKey[]) => void;
        registerNode: (node: Node) => void;
        deregisterNode: (node: Node) => void;
        getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
        getHalfCheckedNodes: () => TreeNodeData[];
        getHalfCheckedKeys: () => TreeKey[];
        _getAllNodes: () => Node[];
        updateChildren: (key: TreeKey, data: TreeData) => void;
        _setCheckedKeys: (key: TreeKey, leafOnly: boolean | undefined, checkedKeys: {
            [key: string]: boolean;
        }) => void;
        setCheckedNodes: (array: Node[], leafOnly?: boolean) => void;
        setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
        setDefaultExpandedKeys: (keys: TreeKey[]) => void;
        setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
        getCurrentNode: () => Node;
        setCurrentNode: (currentNode: Node) => void;
        setUserCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
        setCurrentNodeKey: (key?: TreeKey, shouldAutoExpandParent?: boolean) => void;
    }>;
    root: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: TreeNodeData;
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./tree.type").FakeNode | Node, index?: number, batch?: boolean) => void;
        insertBefore: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
        insertAfter: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: () => void, expandParent?: boolean) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        eachNode: (callback: (node: Node) => void) => void;
        reInitChecked: () => void;
    }>;
    currentNode: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: TreeNodeData;
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./tree.type").FakeNode | Node, index?: number, batch?: boolean) => void;
        insertBefore: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
        insertAfter: (child: import("./tree.type").FakeNode | Node, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: () => void, expandParent?: boolean) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        eachNode: (callback: (node: Node) => void) => void;
        reInitChecked: () => void;
    }>;
    dragState: import("vue").Ref<{
        showDropIndicator: boolean;
        draggingNode: null;
        dropNode: null;
        allowDrop: boolean;
        dropType: null;
    }>;
    el$: import("vue").Ref<Nullable<HTMLElement>>;
    dropIndicator$: import("vue").Ref<Nullable<HTMLElement>>;
    isEmpty: import("vue").ComputedRef<boolean>;
    filter: (value: any) => void;
    getNodeKey: (node: Node) => any;
    getNodePath: (data: TreeKey | TreeNodeData) => TreeNodeData[];
    getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
    getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
    getCurrentNode: () => TreeNodeData;
    getCurrentKey: () => any;
    setCheckedNodes: (nodes: Node[], leafOnly?: boolean) => void;
    setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
    setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
    getHalfCheckedNodes: () => TreeNodeData[];
    getHalfCheckedKeys: () => TreeKey[];
    setCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
    setCurrentKey: (key?: TreeKey, shouldAutoExpandParent?: boolean) => void;
    t: import("element-plus/es/hooks").Translator;
    getNode: (data: TreeKey | TreeNodeData) => Node;
    remove: (data: TreeNodeData | Node) => void;
    append: (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node) => void;
    insertBefore: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node) => void;
    insertAfter: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node) => void;
    handleNodeExpand: (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void;
    updateKeyChildren: (key: TreeKey, data: TreeData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("check" | "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "check" | "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: PropType<TreeComponentProps["defaultCheckedKeys"]>;
    defaultExpandedKeys: PropType<TreeComponentProps["defaultExpandedKeys"]>;
    currentNodeKey: PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: PropType<TreeComponentProps["props"]>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: PropType<TreeComponentProps["load"]>;
    filterNodeMethod: PropType<TreeComponentProps["filterNodeMethod"]>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: PropType<string | import("vue").Component>;
    };
}>> & {
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    onCheck?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    props: import("./tree.type").TreeOptionProps;
    checkStrictly: boolean;
    lazy: boolean;
    accordion: boolean;
    draggable: boolean;
    defaultExpandAll: boolean;
    indent: number;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    highlightCurrent: boolean;
}>;
export default _default;
