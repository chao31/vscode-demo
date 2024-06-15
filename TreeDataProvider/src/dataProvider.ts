import { TreeDataProvider, Event, TreeItem, TreeItemCollapsibleState, ProviderResult } from "vscode";

export class DataProvider implements TreeDataProvider<DataItem> {
    onDidChangeTreeData?: Event<DataItem | null | undefined> | undefined;
    data: DataItem[];

    constructor() {
        this.data = [
            new DataItem('第1行', [new DataItem('1-1'), new DataItem('1-2')]),
            new DataItem('第2行', [new DataItem('2-1'), new DataItem('2-2')]),
            new DataItem('第3行', [new DataItem('3-1'), new DataItem('3-2')])
        ];
    }

    // 不用改
    getTreeItem(element: DataItem): TreeItem | Thenable<TreeItem> {
        return element;
    }

    // 不用改
    getChildren(element?: DataItem | undefined): ProviderResult<DataItem[]> {
        if (element === undefined) {
            return this.data;
        }
        return element.children;
    }
}


class DataItem extends TreeItem{
    public children: DataItem[] | undefined;

    // 不用改
    constructor(label: string, children?: DataItem[] | undefined) {
        super(label, children === undefined ? TreeItemCollapsibleState.None : TreeItemCollapsibleState.Collapsed);
        this.children = children;
    }
}