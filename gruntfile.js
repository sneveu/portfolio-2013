module.exports = function(grunt) {

	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			buildinfo: {
					deploy: 'deploy',
					dist: 'dist',
					temp: 'temp'
			},

			requirejs: {
				compile: {
						options: {
								appDir: "<%= buildinfo.deploy %>",
								dir: "<%= buildinfo.dist %>",
								modules: [
										{
												name: "loader"
										}
								],
								baseUrl: "js",
								mainConfigFile: "deploy/js/loader.js",
								keepBuildDir: true,
								closure: {
										CompilerOptions: {},
										CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
										loggingLevel: 'WARNING'
								},
								pragmas: {
										optimize: true
								},
								optimize: "uglify"
						}
				}
			}
		});
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Default task(s).
	grunt.registerTask('default', ['requirejs']);

};