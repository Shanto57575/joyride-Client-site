/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
	return (
		<div className="space-y-6 mb-20">
			<h1 className="text-center font-serif font-extrabold text-xl lg:text-3xl underline">
				Important <span className="text-orange-500">FaQ</span>'s!!!
			</h1>
			<div
				tabIndex={0}
				className="collapse collapse-plus border border-base-300 rounded-box bg-stone-700 hover:bg-slate-600 p-3 text-white"
			>
				<div className="collapse-title text-xl font-medium">
					What is an access token and refresh token? How do they work and where
					should we store them on the client-side?
				</div>
				<div className="collapse-content">
					An access token is a short-term authorization credential allowing a
					client to access specific resources. A refresh token is a long-term
					credential used to obtain new access tokens when they expire. Access
					tokens are stored in memory or short-lived storage, while refresh
					tokens are kept securely in HTTP-only cookies or device-specific
					secure storage. Security measures must be implemented to protect
					tokens from unauthorized access or leakage.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-plus border border-base-300 rounded-box bg-stone-700 hover:bg-slate-600 p-3 text-white"
			>
				<div className="collapse-title text-xl font-medium">
					Compare SQL and NoSQL databases?
				</div>
				<div className="collapse-content">
					SQL databases use a structured data model with predefined schemas and
					SQL as the query language. They are suitable for complex and
					structured data, support ACID transactions, and provide strong
					consistency. However, scaling SQL databases can be challenging due to
					their rigid structure and the need for vertical scaling (adding more
					resources to a single server). NoSQL databases use various data
					models, such as key-value pairs, documents, columns, or graphs, and
					have flexible schemas. They are designed for handling unstructured or
					semi-structured data and offer horizontal scalability by distributing
					data across multiple servers. NoSQL databases prioritize scalability
					and can handle large volumes of data with high performance. However,
					they may sacrifice some features like strong consistency and ACID
					transactions in favor of scalability and availability. Overall, the
					choice between SQL and NoSQL databases depends on the specific
					requirements of the application, such as data structure, scalability
					needs, and the importance of strong consistency or transaction
					support.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-plus border border-base-300 rounded-box bg-stone-700 hover:bg-slate-600 p-3 text-white"
			>
				<div className="collapse-title text-xl font-medium">
					What is express js? What is Nest JS?
				</div>
				<div className="collapse-content">
					Express.js is a minimalist web application framework for Node.js. It
					provides a simple and flexible way to build web applications and APIs
					by providing a set of functions and middleware for handling HTTP
					requests, routing, and middleware execution. Express.js is known for
					its lightweight and unopinionated nature, allowing developers to have
					more control over their application's structure and functionality.
					Nest.js is a progressive Node.js framework for building scalable and
					efficient server-side applications. It is built on top of Express.js
					and provides additional features and architectural patterns to
					streamline the development process. Nest.js embraces TypeScript and
					utilizes decorators, modules, dependency injection, and other concepts
					inspired by Angular to create a modular and maintainable codebase. It
					also offers support for features like dependency injection,
					decorators, middleware, and extensive tooling, making it suitable for
					building complex enterprise-level applications.{" "}
				</div>
			</div>
			<div
				tabIndex={0}
				className="collapse collapse-plus border border-base-300 rounded-box bg-stone-700 hover:bg-slate-600 p-3 text-white"
			>
				<div className="collapse-title text-xl font-medium">
					What is MongoDB aggregate and how does it work?
				</div>
				<div className="collapse-content">
					In MongoDB, the aggregate function is used to perform advanced data
					aggregation operations on the data stored in a collection. It allows
					you to process and transform the data using a pipeline of stages. The
					aggregation pipeline consists of multiple stages that define the
					sequence of operations to be performed on the data. Each stage in the
					pipeline performs a specific operation, such as filtering, grouping,
					sorting, projecting, or joining data. The stages are executed in
					order, and the output of one stage becomes the input for the next
					stage in the pipeline. This allows you to build complex queries and
					perform operations that go beyond simple CRUD operations. Some
					commonly used stages in the aggregate pipeline include: 1. $match:
					Filters the documents based on specific criteria, similar to the find
					operation. 2. $group: Groups documents together based on a specified
					key and performs aggregation operations on the grouped data. 3.
					$project: Reshapes the documents by specifying which fields to include
					or exclude and applying transformations. 4. $sort: Sorts the documents
					based on specified fields and sort orders. 5. $lookup: Performs a left
					outer join with another collection and retrieves matching documents
					from the joined collection. 6. $unwind: Deconstructs an array field
					and produces a separate document for each element in the array. By
					combining these stages in different ways, you can perform complex
					aggregation operations to analyze, summarize, and transform the data
					in MongoDB collections. The aggregate function provides a powerful and
					flexible way to work with data at a higher level of abstraction than
					basic CRUD operations.{" "}
				</div>
			</div>
		</div>
	);
};

export default Blog;
