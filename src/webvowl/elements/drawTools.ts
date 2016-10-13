export class DrawTools {



	static appendCircularClass = (parent, radius, cssClasses, tooltip?, backgroundColor?) => {
		var circle = parent.append("circle")
			.classed("class", true)
			.attr("r", radius);

		DrawTools.addCssClasses(circle, cssClasses);
		if (tooltip) {
			DrawTools.addToolTip(circle, tooltip);
		}
		if (backgroundColor) {
			DrawTools.addBackgroundColor(circle, backgroundColor);
		}

		return circle;
	}

	private static addCssClasses = (element, cssClasses) => {
		if (cssClasses instanceof Array) {
			cssClasses.forEach(function (cssClass) {
				element.classed(cssClass, true);
			});
		}
	}

	private static addToolTip(element, tooltip) {
		if (tooltip) {
			element.append("title").text(tooltip);
		}
	}

	private static addBackgroundColor(element, backgroundColor) {
		if (backgroundColor) {
			element.style("fill", backgroundColor);
		}
	}

	static appendRectangularClass = (parent, width, height, cssClasses, tooltip, backgroundColor) => {
		var rectangle = parent.append("rect")
			.classed("class", true)
			.attr("x", -width / 2)
			.attr("y", -height / 2)
			.attr("width", width)
			.attr("height", height);

		DrawTools.addCssClasses(rectangle, cssClasses);
		DrawTools.addToolTip(rectangle, tooltip);
		DrawTools.addBackgroundColor(rectangle, backgroundColor);

		return rectangle;
	};

	static drawPin = (container, dx, dy, onClick) => {
		var pinGroupElement = container
			.append("g")
			.classed("hidden-in-export", true)
			.attr("transform", "translate(" + dx + "," + dy + ")");

		pinGroupElement.append("circle")
			.classed("class pin feature", true)
			.attr("r", 12)
			.on("click", function () {
				if (onClick) {
					onClick();
				}
				d3.event.stopPropagation();
			});

		pinGroupElement.append("line")
			.attr("x1", 0)
			.attr("x2", 0)
			.attr("y1", 12)
			.attr("y2", 16);

		return pinGroupElement;
	};
}