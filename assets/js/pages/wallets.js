const balanceAnalyticsElem = document.getElementById("balance-analytics");

const balanceAnalytics = new Chart(balanceAnalyticsElem, {
	type: "bar",
	data: {
		labels: ["Jan", "Feb", "Mar"],
		datasets: [
			{
				data: [6000, 5000, 8000],
				backgroundColor: "#e7854d",
				hoverBackgroundColor: "#e7854d",
				barPercentage: 0.5,
			},
		],
	},
	options: {
		plugins: {
			legend: false,
		},
		scales: {
			x: {
				grid: {
					drawBorder: false,
					drawOnChartArea: false,
					display: false,
					lineWidth: 5,
					borderWidth: 0,
				},
				ticks: {
					display: false,
				},
			},
			y: {
				min: 1_000,
				type: "linear",
				ticks: {
					stepSize: 5_000,
					callback: function (label) {
						return "$" + label / 1000 + "k";
					},
				},
			},
		},
	},
	responsive: false,
});
