import CardContainer from "../../../primitives/atoms/cardContainer";
import DishContents from "../../../primitives/atoms/dishContents";
import SearchResultHeader from "../atoms/searchResultHeader";

function RestaurantSearchResult({ result }) {
	return (
		<div className=" my-4 sm:my-8">
			{result ? (
				<>
					<SearchResultHeader restaurantName={result.restaurant.businessName} status={result.restaurant.isOpen} />
					<CardContainer>
						{result.dishes.map((cv, i) => {
							if (i < 5) {
								return (
									<DishContents
										title={cv.dishTitle}
										price={cv.price}
										description={cv.description}
										divider={i + 1 !== result.dishes.length && i < 4}
									/>
								);
							}
						})}
					</CardContainer>
				</>
			) : (
				""
			)}
		</div>
	);
}

export default RestaurantSearchResult;
