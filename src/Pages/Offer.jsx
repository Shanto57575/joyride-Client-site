/* eslint-disable react/no-unescaped-entities */
const Offer = () => {
	return (
		<div>
			<h1 className="text-center font-serif text-5xl text-cyan-400">FAQ!!!</h1>

			<div className="md:flex gap-10 md:gap-10 items-center">
				<div className="w-full md:w-1/2">
					<div className="">
						<div tabIndex={0} className="collapse group my-5">
							<div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								How can I place an order on your toy marketplace?
							</div>
							<div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								<p>
									Placing an order is quick and easy! Simply browse our wide
									range of toys, select the ones you wish to purchase, and add
									them to your shopping cart. Once you're ready, proceed to the
									checkout page, provide the necessary shipping and payment
									details, and confirm your order. You'll receive an order
									confirmation via email shortly after.{" "}
								</p>
							</div>
						</div>
						<div tabIndex={0} className="collapse group my-5">
							<div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								What are the available payment options on your toy marketplace?
							</div>
							<div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								<p>
									We offer multiple secure payment options to ensure a
									convenient shopping experience. You can pay for your toys
									using major credit cards, such as Visa, Mastercard, and
									American Express. Additionally, we also accept payments
									through popular digital wallets like PayPal and Apple Pay.
								</p>
							</div>
						</div>
						<div tabIndex={0} className="collapse group my-5">
							<div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								How long does it take to receive my order?
							</div>
							<div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								<p>
									We understand that you're excited to receive your toys! Our
									estimated delivery time varies depending on your location and
									the shipping method chosen. Generally, orders are processed
									within 1-2 business days, and shipping times typically range
									from 3 to 7 business days. However, please note that these are
									estimated times and delays may occur due to unforeseen
									circumstances or high order volumes.
								</p>
							</div>
						</div>
						<div tabIndex={0} className="collapse group my-5">
							<div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								What is your return policy for toys purchased on your
								marketplace?
							</div>
							<div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								<p>
									We want you to be completely satisfied with your toy purchase.
									If for any reason you're not happy with your order, we offer a
									hassle-free return policy. You can return the toys within 30
									days of receiving them, provided they are in their original
									condition and packaging. Simply contact our customer support
									team, and they will guide you through the return process and
									assist with any further queries.
								</p>
							</div>
						</div>
						<div tabIndex={0} className="collapse group my-5">
							<div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								Are the toys on your marketplace safe for children?
							</div>
							<div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
								<p>
									Absolutely! The safety of children is our utmost priority. We
									ensure that all toys listed on our marketplace meet or exceed
									the safety standards set by regulatory authorities. We work
									closely with trusted suppliers who adhere to strict safety
									guidelines, including using non-toxic materials and conducting
									rigorous quality checks. However, we always recommend adult
									supervision while children play with toys to ensure their
									safety.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<img
						className="md:w-[500px]"
						src="https://i.postimg.cc/jqJVSx0C/faq.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Offer;
