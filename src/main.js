// Playcanvas components go here
import './example.ts';

// Only initialize the app via require('') when not running in playcanvas editor worker
if ((typeof window === 'object' && typeof importScripts !== 'function')) {
	require('./app.js');
}
