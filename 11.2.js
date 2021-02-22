const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 1,
        }, {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },],
    students: [
        {
            id: 10,
            name: "Jennifer", age: 20,
        }, {
            id: 11,
            name: "Howard", age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy", age: 86,
        }, {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson: function (type, id) {
        console.log("type :", type);

        if (type === "teachers") {
            let result = this.teachers.filter((t) => {
                return t.id === id;
            })
            return result;
        } else if (type === "students") {
            let result = this.students.filter((t) => {
                return t.id === id;
            })
            return result;
        }
        return null;
    },
    assignStudent: function (id, subject) {
        const student = this.findPerson("students", id)
        const result = this.teachers.find((t) => {
            return t.subjects.includes(subject) && t.capacityLeft > 0
        })


        if (!result || !student) {
            return 'Error'
            // return "Sorry, no available teachers left";
        }

        result.students.push(student);
        result.capacityLeft--;

        return result;


        let hasSubject = this.teachers.map((t) => {
            return t.subjects.filter((sub) => {
                return sub === subject ? t : null
            })
        })
        console.log(hasSubject)
        console.log(hasSubject)

        if (hasSubject.length === 0) {
            return "Sorry, no available teachers left";
        }
    }
};


school.teachers.map((s) => {
    console.log(s);
})
console.log(school.getAllTeachers())
console.log(school.findPerson("worker", 13))
console.log(school.assignStudent(12, "physics"))
console.log(school.assignStudent(13, "physics"))
