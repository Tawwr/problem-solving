//You have a RecentCounter class which counts the number of recent requests within a certain time frame.

//Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents
//some time in milliseconds, and returns the number of requests that
//has happened in the past 3000 milliseconds (including the new request).
//Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

function RecentCounter() {
	this.queue = [];
	this.size = this.queue.length;
	this.enqueue = function (value) {
		this.queue.push(value);
		this.size++;
	};

	this.dequeue = function () {
		this.size--;
		return this.queue.shift();
	};

	this.peek = function () {
		return this.queue[0];
	};

	this.search = function (value) {
		for (let i = 0; i < this.size; i++) {
			if (this.queue[i] === value) return this.queue[i];
		}
		return null;
	};

  this.ping = function (t) {
    this.enqueue(t);
    const rangeStart = t - 3000; 
    while (this.peek() < rangeStart) {
      this.dequeue();
    }
    return this.size;
  }
}
