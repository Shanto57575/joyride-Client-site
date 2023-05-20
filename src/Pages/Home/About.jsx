/* eslint-disable react/no-unescaped-entities */

const About = () => {
	return (
		<div className="bg-cyan-900 py-12 mb-20">
			<div className="container mx-auto px-10">
				<h1 className="text-4xl font-bold text-center mb-8">
					Welcome to JoyRide!
				</h1>

				<div className="flex flex-wrap items-center justify-center mb-8">
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<img
							src="https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4="
							alt="JoyRide Marketplace"
							className="mx-auto h-48 mb-4 rounded-xl"
						/>
					</div>

					<div className="w-full md:w-1/2 lg:w-2/3 px-4">
						<p className="text-base text-gray-100 leading-relaxed">
							Since 1997, JoyRide Marketplace has been dedicated to providing an
							exhilarating world of toy cars for kids. We are passionate about
							delivering joy, excitement, and endless playtime to children of
							all ages. With a rich history spanning over two decades, we have
							become a trusted destination for parents and collectors alike.
						</p>
					</div>
				</div>

				<div className="text-center px-10">
					<p className="text-base text-gray-100 mb-8">
						At JoyRide, we understand the unique thrill that comes with playing
						with toy cars. They ignite imagination, spark creativity, and
						transport young minds to a world full of adventure. Our vast
						selection of toy cars encompasses a wide range of styles, from sleek
						sports cars to rugged off-road vehicles and everything in between.
						We curate our collection with meticulous attention to detail,
						ensuring that every car meets our high standards of quality and
						safety.
					</p>

					<p className="text-base text-gray-100 mb-8">
						We take pride in being more than just a marketplace. JoyRide is a
						community of car enthusiasts, parents, and kids who share a love for
						the magic of toy cars. Our team of dedicated professionals is
						committed to providing exceptional customer service, assisting you
						in finding the perfect toy car for your child's needs. Whether you
						are searching for a birthday gift, expanding your collection, or
						nurturing your child's passion for cars, we are here to guide you
						every step of the way.
					</p>

					<p className="text-base text-gray-100 mb-8">
						As an established player in the toy car industry, we have fostered
						relationships with renowned manufacturers and suppliers worldwide.
						This allows us to offer a diverse range of brands, ensuring that you
						have access to the latest releases, classic favorites, and exclusive
						limited editions. We continually update our inventory to provide an
						exciting and dynamic shopping experience.
					</p>

					<p className="text-base text-gray-100 mb-8">
						At JoyRide Marketplace, we believe in the power of play to shape
						young minds. We are proud to contribute to the development of
						children by providing toys that encourage imagination, motor skills,
						and social interaction. We are committed to offering an environment
						that promotes positivity, creativity, and laughter.
					</p>

					<p className="text-base text-gray-100">
						Thank you for choosing JoyRide Marketplace as your go-to destination
						for toy cars. Join us on this thrilling journey and let the joyrides
						begin!
					</p>
				</div>

				<p className="text-center mt-8">
					Sincerely, <br />
					The JoyRide Team
				</p>
			</div>
		</div>
	);
};

export default About;
