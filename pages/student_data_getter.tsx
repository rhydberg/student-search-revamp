let students=[];

try {
	console.log("trying to get data from local storage");
	students = JSON.parse(localStorage.getItem("studentdb"));
} catch (Exception) {
	console.log("failed, importing data");
	import("../merged1.json").then((db) => {
		students = db.default;
		localStorage.setItem("studentdb", JSON.stringify(students));
	})
	.catch((except) => {
		console.log(except);
	});
}

export default students;
