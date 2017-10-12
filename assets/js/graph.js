var limit = 60 * 1,
		duration = 750,
		now = new Date(Date.now() - duration)

var groups = {
		current: {
				value: 0,
				color: 'orange',
				data: d3.range(limit).map(function() {
						return 0
				})
		}
}
var width = document.getElementById("graph").offsetWidth,
height = 200

var x = d3.time.scale()
.domain([now - (limit - 2), now - duration])
.range([0, width])

var y = d3.scale.linear()
.domain([0, 100])
.range([height, 0])

var line = d3.svg.line()
.interpolate('basis')
.x(function(d, i) {
	return x(now - (limit - 1 - i) * duration)
})
.y(function(d) {
	return y(d)
})

var svg = d3.select('.graph').append('svg')
.attr('class', 'chart')
.attr('width', "100%")
.attr('height', height + 50)

var axis = svg.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0,' + height + ')')
		.call(x.axis = d3.svg.axis().scale(x).orient('bottom'))

var paths = svg.append('g')

for (var name in groups) {
		var group = groups[name]
		group.path = paths.append('path')
				.data([group.data])
				.attr('class', name + ' group')
				.style('stroke', group.color)
				.style({'stroke-width': '3px'})
				.attr('fill', 'none')
}


function tick() {


//   path.attr('d', line);

	now = new Date()
			// Add new values
			for (var name in groups) {
				var group = groups[name]
				//group.data.push(group.value) // Real values arrive at irregular intervals
				if(typeof miner != 'undefined'){
					group.data.push(miner.getHashesPerSecond());
				}else{
					group.data.push(0);
				}
			}
			group.path.attr('d', line)

			// Shift domain
			x.domain([now - (limit - 2) * duration, now - duration])

			// Slide x-axis left
			axis.transition()
					.duration(duration)
					.ease('linear')
					.call(x.axis)

			// Slide paths left
			paths.attr('transform', null)
					.transition()
					.duration(duration)
					.ease('linear')
					.attr('transform', 'translate(' + x(now - (limit - 1) * duration) + ')')
					.each('end', tick)

			// Remove oldest data point from each group
			for (var name in groups) {
					var group = groups[name]
					group.data.shift()
			}
	}
tick()