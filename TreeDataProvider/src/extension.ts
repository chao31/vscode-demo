import * as vscode from 'vscode';
import {DataProvider} from './dataProvider';

export function activate(context: vscode.ExtensionContext) {
	// 注册自定义TreeView
	vscode.window.registerTreeDataProvider("myTreeView", new DataProvider());
}

export function deactivate() {}
