class Graph {
    constructor(chart, min, max, points, interval) {
        this.chart = chart;
        this.min = min;
        this.max = max;
        this.points = points;

        for (let index = 0; index < points; index++) {
            this.update(this);
        }
        
        window.setInterval(this.update, interval, this);
    }

    getRandomData(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    update(graph) {
        const chart = graph.chart;
        const labels = chart.data.labels;
        const dataset = chart.data.datasets[0].data;
    
        if (labels.length >= graph.points) {
            labels.shift();
            dataset.shift();
        }

        const y = graph.getRandomData(graph.min, graph.max);
        labels.push(y);
        dataset.push(y);
    
        chart.update();
    }
}

(() => {
    const cpuContext = document.getElementById("cpu-usage").getContext("2d");
    const cpuGradient = cpuContext.createLinearGradient(0, 175, 0, 0);
    cpuGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    cpuGradient.addColorStop(1, "rgba(219, 99, 52, 255)");
    const cpuChart = new Chart(cpuContext, {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [{
                "lineTension": 0,
                "borderWidth": 2,
                "data": [],
                "backgroundColor": cpuGradient,
                "borderColor": "rgb(220, 100, 50)",
                "pointBackgroundColor": 'rgba(0, 0, 0, 0)',
                "pointBorderColor": 'rgba(0, 0, 0, 0)'
            }]
        },
        "options": {
            "animation": false,
            "legend": {
                "display": false
            },
            "tooltips": {
                "enabled": false
            },
            "scales": {
                "yAxes": [{
                    "position": "left",
                    "ticks": {
                        "fontColor": "hsl(240, 15%, 85%)",
                        "fontStyle": "bold",
                        "fontSize": 16,
                        "min": 0,
                        "max": 100,
                        "stepSize": 25
                    },
                    "gridLines": {
                        "color": "hsla(240, 15%, 85%, 25%)",
                        "zeroLineColor": "hsla(240, 15%, 85%, 25%)"
                    }
                }, {
                    "position": "right",
                    "ticks": {
                        "fontColor": "hsl(240, 15%, 85%)",
                        "fontStyle": "bold",
                        "fontSize": 16,
                        "min": 0,
                        "max": 100,
                        "stepSize": 25
                    },
                    "gridLines": {
                        "color": "hsla(240, 15%, 85%, 25%)",
                        "zeroLineColor": "hsla(240, 15%, 85%, 25%)"
                    }
                }],
                "xAxes": [{
                    "display": false
                }]
            }
        }
    });

    const ramContext = document.getElementById("ram-usage").getContext("2d");
    const ramGradient = ramContext.createLinearGradient(0, 175, 0, 0);
    ramGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    ramGradient.addColorStop(1, "rgba(180, 52, 219, 255)");
    const ramChart = new Chart(ramContext, {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [{
                "steppedLine": "middle",
                "borderWidth": 2,
                "data": [],
                "backgroundColor": ramGradient,
                "borderColor": "rgb(180, 50, 220)",
                "pointBackgroundColor": 'rgba(0, 0, 0, 0)',
                "pointBorderColor": 'rgba(0, 0, 0, 0)'
            }]
        },
        "options": {
            "responsive": true,
            "animation": false,
            "legend": {
                "display": false
            },
            "tooltips": {
                "enabled": false
            },
            "scales": {
                "yAxes": [{
                    "position": "left",
                    "ticks": {
                        "fontColor": "hsl(240, 15%, 85%)",
                        "fontStyle": "bold",
                        "fontSize": 16,
                        "min": 0,
                        "max": 24,
                        "stepSize": 8
                    },
                    "gridLines": {
                        "color": "hsla(240, 15%, 85%, 25%)",
                        "zeroLineColor": "hsla(240, 15%, 85%, 25%)"
                    }
                }, {
                    "position": "right",
                    "ticks": {
                        "fontColor": "hsl(240, 15%, 85%)",
                        "fontStyle": "bold",
                        "fontSize": 16,
                        "min": 0,
                        "max": 24,
                        "stepSize": 8
                    },
                    "gridLines": {
                        "color": "hsla(240, 15%, 85%, 25%)",
                        "zeroLineColor": "hsla(240, 15%, 85%, 25%)"
                    }
                }],
                "xAxes": [{
                    "display": false
                }]
            }
        }
    });

    new Graph(cpuChart, 55, 70, 50, 250);
    new Graph(ramChart, 10, 14, 25, 1000);

    new Chart(document.getElementById("hdd-usage").getContext("2d"), {
        "type": "doughnut",
        "data": {
            "labels": ["Disk 1", "Disk 2", "Disk 3", "Disk 4"],
            "datasets": [{
                "data": [981, 435, 287, 97],
                "borderColor": "hsl(240, 30%, 17%)",
                "hoverBorderColor": "hsl(240, 30%, 17%)",
                "backgroundColor": [
                    "hsl(215, 75%, 55%)",
                    "hsl(225, 75%, 55%)",
                    "hsl(235, 75%, 55%)",
                    "hsl(245, 75%, 55%)"
                ],
                "hoverBackgroundColor": [
                    "hsl(215, 75%, 55%)",
                    "hsl(225, 75%, 55%)",
                    "hsl(235, 75%, 55%)",
                    "hsl(245, 75%, 55%)"
                ]
            }]
        },
        "options": {
            "responsive": true,
            "aspectRatio": 1,
            "legend": {
                "display": false
            },
            "tooltips": {
                "mode": "single",
                "callbacks": {
                    "label": (items, data) => {
                        const disk = " " + data.labels[items.index] + ": ";
                        const space = data.datasets[0].data[items.index] + "GB";
                        return disk + space;
                    }
                }
            }
        }
    });
})();