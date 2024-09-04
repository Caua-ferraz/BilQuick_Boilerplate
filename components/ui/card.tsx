import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className }: CardProps) {
	return <div className={cn("bg-white shadow-md rounded-lg", className)}>{children}</div>;
}

interface CardHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
	return <div className={cn("p-4 border-b", className)}>{children}</div>;
}

interface CardTitleProps {
	children: React.ReactNode;
	className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
	return <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>;
}

interface CardContentProps {
	children: React.ReactNode;
	className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
	return <div className={cn("p-4", className)}>{children}</div>;
}
