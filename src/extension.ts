import * as path from 'path';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as markdownItContainer from 'markdown-it-container';
// We'll need to dynamically import these modules
let markdownItEmoji: any = null;
let customEmojis: any = null;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Напишите любое название вашего расширения!');
	});

	context.subscriptions.push(disposable);
	
	// Dynamically import markdown-it-emoji
	try {
		markdownItEmoji = require('markdown-it-emoji');
		// Import custom emojis
		customEmojis = require(path.join(context.extensionPath, 'scripts', 'emoji.js')).customEmojis;
	} catch (error) {
		console.error('Failed to load markdown-it-emoji:', error);
	}
	
	// Return the markdown-it plugin extension
	return {
		extendMarkdownIt(md: any) {
			// Alert blocks
			md.use(markdownItContainer, 'alert', {
				validate: () => true,
				render: (tokens: any, idx: number) => {
					return tokens[idx].nesting === 1 ? '<div class="alert">' : '</div>';
				}
			});

			// Spoiler blocks
			md.use(markdownItContainer, 'spoiler', {
				marker: '?',
				validate: () => true,
				render: (tokens: any, idx: number) => {
					// Логика для скрытия/раскрытия
					if (tokens[idx].nesting === 1) {
						// Извлекаем заголовок из атрибутов
						const m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
						const title = m ? m[1] : 'Spoiler';
						return `<div class="spoiler"><details><summary>${title}</summary>`;
					} else {
						return '</details></div>';
					}
				}
			});

			// Add emoji support if available
			if (markdownItEmoji) {
				md.use(markdownItEmoji, {
					defs: customEmojis || {}
				});
			}

			// Add Mermaid.js support
			md.use(markdownItContainer, 'mermaid', {
				validate: () => true,
				render: (tokens: any, idx: number) => {
					if (tokens[idx].nesting === 1) {
						return '<div class="mermaid">';
					} else {
						return '</div>';
					}
				}
			});

			return md;
		}
	};
}

// This method is called when your extension is deactivated
export function deactivate() {}
