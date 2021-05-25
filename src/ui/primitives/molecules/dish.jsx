import DishContents from "../atoms/dishContents";
import CardContainer from "../atoms/cardContainer";

function Dish() {
	return (
		<div>
			<CardContainer extraStyles="">
				<DishContents title="My Title" price="99" description="this is my description" divider={true} />
				<DishContents title="My Title" price="99" description="this is my description" divider={true} />
				<DishContents title="My Title" price="99" description="this is my description" />
			</CardContainer>
		</div>
	);
}

export default Dish;
