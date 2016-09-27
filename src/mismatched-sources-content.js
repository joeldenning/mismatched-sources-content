import Root from './root.component.js';

const foo = {
	rootComponent: Root, // If I comment out this line completely then the code builds
};

export const bar = [
	foo.rootComponent, // Same thing here -- commenting the code fixes the build
];
