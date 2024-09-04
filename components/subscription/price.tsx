"use client"; // Indica que este componente é renderizado no lado do cliente

import { CheckCircle2 } from "lucide-react"; // Importa o ícone CheckCircle2 da biblioteca lucide-react
import React from "react"; // Importa React
import { Button } from "@/components/ui/button"; // Importa o componente Button de um caminho relativo
import { cn } from "@/lib/utils"; // Importa uma função utilitária para combinar classes
import Checkout from "./Checkout"; // Importa o componente Checkout para lidar com o processo de pagamento
import useUser from "@/app/hook/useUser"; // Importa o hook useUser para obter dados do usuário

export default function Price() {
	const { data: user, isLoading } = useUser(); // Usa o hook useUser para obter os dados do usuário e o estado de carregamento

	// Define os planos de preços disponíveis
	const prices = [
		{
			title: "Starter", // Título do plano
			description: "Start your next side project", // Descrição do plano
			benefits: [ // Lista de benefícios incluídos no plano
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 99, // Preço do plano
			priceId: "price_1PuOP02KovIBh20to7a2fFQc", // ID do preço utilizado no processo de checkout
		},
		{
			title: "Pro", // Título do plano
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry", // Descrição do plano
			benefits: [ // Lista de benefícios incluídos no plano
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 199, // Preço do plano
			priceId: "price_1PuOOH2KovIBh20tRyP70lj4", // ID do preço utilizado no processo de checkout
		},
		{
			title: "Enterprise", // Título do plano
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry", // Descrição do plano
			benefits: [ // Lista de benefícios incluídos no plano
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 299, // Preço do plano
			priceId: "price_1PuOPB2KovIBh20tyrnWpMrY", // ID do preço utilizado no processo de checkout
		},
	];

	// Verifica se os dados do usuário ainda estão carregando
	if (isLoading) {
		return <></>; // Retorna nada enquanto os dados estão sendo carregados
	}

	// Verifica se o usuário já possui uma assinatura ativa
	if (user?.subscription?.customer_id) {
		return <></>; // Retorna nada se o usuário já estiver inscrito
	}

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{prices.map((price, index) => {
					// Verifica se o plano é o mais popular ("Pro" é o segundo na lista)
					const isPopular = index === 1;

					return (
						<div
							key={index} // Chave única para cada item na lista
							className={cn(
								"relative border rounded-md p-5 space-y-5",
								{
									"ring-2 ring-green-500": isPopular, // Adiciona destaque ao plano mais popular
								}
							)}
						>
							{/* Rótulo "Recommended" atrás do plano "Pro" */}
							{isPopular && (
								<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 rotate-12 text-green-500 font-bold text-lg opacity-80">
									Recommended
								</span>
							)}

							<div className="space-y-3">
								<h1 className="text-2xl font-bold">
									{price.title} {/* Exibe o título do plano */}
								</h1>
								<h1 className="text-3xl font-bold">
									{price.amount}$ {/* Exibe o valor do plano */}
								</h1>
								<p className="text-sm text-gray-400">
									{price.description} {/* Exibe a descrição do plano */}
								</p>
							</div>
							<div className="space-y-3">
								{price.benefits.map((benefit, index) => (
									<div
										key={index} // Chave única para cada benefício na lista
										className="flex items-center gap-2"
									>
										<CheckCircle2 /> {/* Ícone de check ao lado de cada benefício */}
										<h1 className="text-sm text-gray-400">
											{benefit} {/* Exibe o benefício */}
										</h1>
									</div>
								))}
							</div>
							<Checkout priceId={price.priceId} /> {/* Componente de checkout, passando o ID do preço */}
						</div>
					);
				})}
			</div>
		</div>
	);
}
