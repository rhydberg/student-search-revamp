// import STUDENTS from "./student_data_getter.tsx";

import STUDENTS from "../data.tsx";



function rollToYear(roll) {
	if ((roll[0] === "Y") && (roll[1]) > "7") {
		return roll.slice(0,2);
	} else if (roll.slice(0,2) < '30') {
		return "Y" + roll.slice(0,2);
	} else return "Other";
}

const data = {
	batch:[],
	hall:[],
	prog:[],
	dept:[],
	bloodgrp:[]
};

for (const st of STUDENTS) {
	for (const key in data) {
		if (key === "batch") {
			if (!(data.batch.includes(rollToYear(st.i)))) data.batch.push(rollToYear(st.i));
		} else {
			if (!data[key].includes(st[key[0]])) data[key].push(st[key[0]])
		}
	}
}

for (const key in data) {
	data[key].sort();
}

export {rollToYear, data};
