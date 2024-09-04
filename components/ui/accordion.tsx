import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionProps {
	children: React.ReactNode;
	type?: "single" | "multiple";
	collapsible?: boolean;
	className?: string;
}

export function Accordion({ children, type = "single", collapsible = false, className }: AccordionProps) {
	return <div className={cn("border rounded-lg", className)}>{children}</div>;
}

interface AccordionItemProps {
	value: string;
	children: React.ReactNode;
	className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
	return <div className={cn("border-b last:border-none", className)}>{children}</div>;
}

interface AccordionTriggerProps {
	children: React.ReactNode;
	className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
	return (
		<button className={cn("w-full text-left py-4 px-4 flex justify-between items-center", className)}>
			{children}
		</button>
	);
}

interface AccordionContentProps {
	children: React.ReactNode;
	className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
	return <div className={cn("px-4 pb-4", className)}>{children}</div>;
}
