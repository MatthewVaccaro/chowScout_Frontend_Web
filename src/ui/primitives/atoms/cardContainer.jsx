function CardContainer({ extraStyles, children }) {
	return <div className={`border-solid border border-black10 rounded-md p-3 md:px-6 md:py-4 ${extraStyles}`}>{children}</div>;
}

export default CardContainer;
