
module.exports = (grunt) ->
  # load all npm grunt tasks
  grunt.initConfig

    jshint:
      options: grunt.file.readJSON './.jshintrc'
      specs:
        src: [
            'projects/**/**.js'
        ]

    watch:
      specs:
        files: '<%= jshint.specs.src %>',
        tasks: ['jshint:specs']

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jshint'

  grunt.registerTask 'default', ['jshint', 'watch']
