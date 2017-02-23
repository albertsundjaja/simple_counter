step = 1;

var Counter = function(data){
	this.count = ko.observable(0);
	this.name = 'counter ' + data;
}

var ViewModel = function() {
	var self = this;

	this.counterNumber = ko.observableArray([]);

	this.clickedItem = ko.observable();

	for (i=0; i < 5; i++){
		this.counterNumber.push(new Counter(i+1));
	}

	this.clickIncrement = function(clickedItem) {
		self.clickedItem(clickedItem);
		self.clickedItem().count(self.clickedItem().count() + step)
	}
	this.clickDecrement = function(clickedItem) {
		self.clickedItem(clickedItem);
		self.clickedItem().count(self.clickedItem().count() - step)
	}

}

ko.applyBindings(new ViewModel());