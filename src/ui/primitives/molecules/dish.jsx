import DishContents from "../atoms/dishContents";
import CardContainer from "../atoms/cardContainer";

function Dish({ title, price, description, divider, extraStyles }) {
	return (
		<div>
			<CardContainer extraStyles={extraStyles}>
				<DishContents title={title} price={price} description={description} divider={divider} />
			</CardContainer>
		</div>
	);
}

export default Dish;
