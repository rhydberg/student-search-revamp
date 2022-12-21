let students=[];

try {
	console.log("trying to get data from local storage");
	students = JSON.parse(localStorage.getItem("studentdb"));
	if (typeof(students) !== "array") throw new Error("localStorage doesn't have data yet");
	console.log("great success");
} catch (Exception) {
	console.log("failed, importing data");
	import("../merged1.json").then((db) => {
		students = db.default;
		try {
			localStorage.setItem("studentdb", JSON.stringify(students));
		} catch (Exception) {
			//this usually fails when localStorage isn't available because server side render - in which case nothing should be done... AFAIK
			console.log(Exception);
		}
	})
	.catch((except) => {
		console.log(except);
	});
}

export default students;
