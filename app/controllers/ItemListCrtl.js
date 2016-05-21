app.controller("ItemListCtrl", function($scope) {
	$scope.items = [
	{
		id: 0, 
		task: "mow the lawn",
		isCompleted: true,
		dueDate: "12/5/17",
		assignedTo: "greg",
		location: "Zoe's house",
		urgency: "low",
		dependencies: ["sunshine, clippers, hat, water, headphones"]
	},
	{
		id: 1, 
		task: "grade quizzes Zoe",
		isCompleted: false,
		dueDate: "12/5/17",
		assignedTo: "Joe",
		location: "NSS",
		urgency: "high",
		dependencies: ["wifi, tissues, vodka"]
	},
	{
		id: 2, 
		task: "nap",
		isCompleted: true,
		dueDate: "12/5/17",
		assignedTo: "Zoe",
		location: "Zoe's house",
		urgency: "low",
		dependencies: ["hammock, pillow, cat"]
	}
	];
});
