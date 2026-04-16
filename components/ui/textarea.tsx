"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onResize"> {
	error?: string;
	label?: string;
	maxCount?: number;
	onResize?: (height: number) => void;
}

// Relies on the React Compiler (enabled by default in Next 16) to memoize.
// Manual useMemo/useCallback were producing "could not preserve memoization"
// compiler warnings — the compiler does this better automatically.
export function Textarea({
	className,
	error,
	label,
	maxCount,
	onResize,
	onInput,
	...props
}: TextareaProps) {
	const textareaId = React.useId();
	const [charCount, setCharCount] = React.useState(0);
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);

	const handleInput = (event: React.InputEvent<HTMLTextAreaElement>) => {
		const textarea = event.currentTarget;
		setCharCount(textarea.value.length);

		if (onResize) {
			requestAnimationFrame(() => {
				textarea.style.height = "auto";
				const newHeight = textarea.scrollHeight;
				textarea.style.height = `${newHeight}px`;
				onResize(newHeight);
			});
		}

		onInput?.(event);
	};

	React.useEffect(() => {
		const el = textareaRef.current;
		if (!el || !onResize) return;
		const ro = new ResizeObserver((entries) => {
			for (const entry of entries) onResize(entry.contentRect.height);
		});
		ro.observe(el);
		return () => ro.disconnect();
	}, [onResize]);

	return (
		<div className="relative">
			{label && (
				<label
					htmlFor={textareaId}
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					{label}
				</label>
			)}
			<textarea
				id={textareaId}
				className={cn(
					"flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					"min-h-[80px] max-h-[300px] overflow-y-auto resize-y",
					error && "border-red-500",
					className
				)}
				ref={textareaRef}
				onInput={handleInput}
				inputMode="text"
				{...props}
			/>
			<div className="flex justify-between mt-1">
				{error && (
					<p className="text-sm text-red-600" id={`${textareaId}-error`}>
						{error}
					</p>
				)}
				{maxCount !== undefined && (
					<p
						className={cn(
							"text-sm text-gray-500",
							charCount > maxCount && "text-red-500"
						)}
					>
						{charCount}/{maxCount}
					</p>
				)}
			</div>
		</div>
	);
}
