/* eslint-disable react/no-unescaped-entities */
const Reviews = () => {
	return (
		<div>
			<h1 className="text-cyan-500 font-serif text-center text-3xl mt-20 mb-7 font-bold">
				Customer Voices:{" "}
				<span className="text-cyan-200">Happy with Our Toys</span>
			</h1>
			<div className="carousel w-full mb-20">
				<div id="slide1" className="carousel-item text-center relative w-full">
					<div className="lg:w-[700px] rounded-2xl mx-auto space-y-5 font-serif font-bold">
						<img
							src="https://i.postimg.cc/Fzq5BFm5/p1.jpg"
							className="rounded-2xl mx-auto"
						/>
						<p>
							I recently purchased a toy car for my nephew, and he absolutely
							loves it! The design is sleek, and the remote control is easy to
							use, making it perfect for kids aged 5 and above. The car's speed
							and maneuverability make it exciting to play with, both indoors
							and outdoors. It's a durable toy that can withstand rough play,
							and the battery life is impressive.
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item text-center relative w-full">
					<div className="lg:w-[700px] rounded-2xl mx-auto space-y-5 font-serif font-bold">
						<img
							src="https://i.postimg.cc/Jn4MG4QZ/p2.jpg"
							className="rounded-2xl mx-auto"
						/>
						<p>
							I bought this toy car for my son's birthday, and he can't get
							enough of it! The vibrant colors and realistic details make it
							visually appealing. The car is sturdy and well-made, ensuring it
							can withstand the enthusiastic play of an active child. The remote
							control is easy for kids to handle, and the different speed
							settings allow for gradual learning.It's a fantastic gift for any
							young racer!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item text-center relative w-full">
					<div className="lg:w-[700px] rounded-2xl mx-auto space-y-5 font-serif font-bold">
						<img
							src="https://i.postimg.cc/bJ1Z8v3P/p3.jpg"
							className="rounded-2xl mx-auto"
						/>
						<p>
							I purchased this toy car as a birthday gift for my daughter, and
							she was thrilled! The sleek design and attention to detail make it
							look like a miniature version of a real racing car. The controls
							are intuitive, and the car responds smoothly to the remote.Seeing
							the excitement on my daughter's face as she races the car around
							is priceless. Highly recommended!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item text-center relative w-full">
					<div className="lg:w-[700px] rounded-2xl mx-auto space-y-5 font-serif font-bold">
						<img
							src="https://i.postimg.cc/0yf3Xgmy/p4.jpg"
							className="rounded-2xl mx-auto"
						/>
						<p>
							I bought this toy car as a gift for my friend's son, and it was a
							hit! The quality and craftsmanship are evident from the moment you
							unbox it. The car is easy to control, and the range of movement is
							excellent. The lights and sounds add an extra element of
							excitement, capturing the child's attention.I'm pleased with this
							purchase and confident it will bring lots of joy!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide5" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide5" className="carousel-item text-center relative w-full">
					<div className="lg:w-[700px] rounded-2xl mx-auto space-y-5 font-serif font-bold">
						<img
							src="https://i.postimg.cc/kGszwm9x/p5.jpg"
							className="rounded-2xl mx-auto"
						/>
						<p>
							As an avid collector of toy cars, I recently added this gem to my
							collection, and it's become an instant favorite! The attention to
							detail is remarkable, from the intricate interior to the realistic
							paintwork. This toy car is more than just a plaything; it's a work
							of art. It's a masterpiece that sparks the imagination and revs up
							the fun factor!
						</p>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
