// Data transfer
// Config files
// API
// NoSQL Databases (firebase,  mongoDB)

const post = {
    id: 1,
    title: "Post One",
    body: "Thsi is the post body"
};

// converting object to Json

// const myJSONOBject = JSON.stringify(post);

// converting Json to object

// const myObject = JSON.parse(myJSONOBject);

// console.log(myJSONOBject)
console.log(post);
// console.log(myJSONOBject)

const posts = [
    
    {id: 1, title: "Post One", body: "Thsi is the post body" },
    {id: 2, title: "Post two", body: "Thsi is the post body" },
    {id: 3, title: "Post three", body: "Thsi is the post body" },
];

const myJSON2 = JSON.stringify(posts);
console.log(posts);
console.log(myJSON2)

