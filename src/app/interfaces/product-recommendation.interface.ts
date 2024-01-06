export interface IRecommendations {
	[key: string]: IProduct
}

export interface IProduct {
	productName: string;
	productPrice: string;
	image: string;
	inclusions: string[];
	benefits: string[];
}