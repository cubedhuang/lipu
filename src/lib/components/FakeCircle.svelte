<script lang="ts">
	export let n: number;

	$: steps = 2 ** n;

	const padding = 32;

	let canvas: HTMLCanvasElement;
	$: ctx = canvas?.getContext('2d');

	$: if (ctx) {
		ctx.resetTransform();

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.transform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);

		const radius = canvas.width / 2 - padding;

		// --- Draw circle ---

		ctx.beginPath();
		ctx.arc(0, 0, radius - 2, 0, 2 * Math.PI);

		ctx.fillStyle = 'rgb(229 231 235)'; // gray-200
		ctx.fill();

		// --- Draw diameter ---

		ctx.beginPath();
		ctx.moveTo(-radius + 2, 0);
		ctx.lineTo(radius - 2, 0);

		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgb(209 213 219)'; // gray-300
		ctx.stroke();

		// --- Draw text ---

		ctx.textBaseline = 'bottom';
		ctx.textAlign = 'center';
		ctx.font = '32px monospace';

		ctx.fillStyle = 'rgb(75 85 99)'; // gray-600

		ctx.fillText('suli insa', 0, -4);

		// --- Draw circle approximation ---

		const circlePoints: [number, number][] = [];

		for (let i = 0; i < steps * 4; i++) {
			const angle = (i / steps / 4) * 2 * Math.PI;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;

			circlePoints.push([x, y]);
		}

		ctx.beginPath();
		ctx.moveTo(circlePoints[0][0], circlePoints[0][1]);

		for (let i = 0; i < circlePoints.length; i++) {
			const start = circlePoints[i];
			const end = circlePoints[(i + 1) % circlePoints.length];
			const mid = [
				Math.abs(start[0]) > Math.abs(end[0]) ? start[0] : end[0],
				Math.abs(start[1]) > Math.abs(end[1]) ? start[1] : end[1]
			];

			ctx.lineTo(start[0], start[1]);
			ctx.lineTo(mid[0], mid[1]);
			ctx.lineTo(end[0], end[1]);
		}

		ctx.strokeStyle = 'rgb(59 130 246)'; // blue-500
		ctx.lineWidth = 4;

		ctx.stroke();
	}
</script>

<canvas
	bind:this={canvas}
	width="600"
	height="600"
	class="my-4 bg-gray-100 rounded-lg max-w-full w-64"
/>
