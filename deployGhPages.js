const exec = require('child_process').exec;

const commitMessage = process.argv[2];

function execute (command) {
	return new Promise((resolve, reject) => {
		exec(command, 
			function (error, stdout, stderr) { 
				if (error) {
					reject(stderr)
				}

				resolve(stdout)
			}
		)
	})
}

async function start () {
	try {
		console.log('Building...')
		await execute('npm run build')

		console.log('Adding the dist...')
		await execute(`git add dist`)

		console.log('Commiting')
		await execute(`git commit -m "${commitMessage}"`)

		console.log('Pushing to gh')
		await execute('git subtree push --prefix dist origin gh-pages')
		
		console.log('The project was deployed on Gh-pages! Good work!')
	} catch (error) {
		console.log('error', error)
	}
}

start()