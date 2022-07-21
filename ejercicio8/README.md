# Exercise 8: Rendering JSON
**Most of the time, the structure of the data we're working with in real-world applications aren't simple lists like ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'].**

A lot of data is stored in JSON format. This is especially true when you're fetching data from a database.

JSON stands for JavaScript Object Notation, a type of format for data interchange.

This type of data is just an object instead of a simpler datatype such as a string.
```
[
	{
		id: 1,
		setup: "What's the best thing about a Boolean?",
		punchline: "Even if you're wrong, you're only off by a bit"
	},
	{
		id: 2,
		setup: "Why do programmers wear glasses?",
		punchline: "Because they need to C#"
	}
]
```
To keep it simple, let's keep it to only two items.

Using the array of objects above, render the jokes with React.