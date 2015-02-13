module.exports = {
    html: {
        files: [
            {
                expand: true,
                cwd: '<%= config.project.root %>',
                src: ['**/*.html', 'index.html'],
                dest: '<%= config.target.dev %>'
            }
        ]
    },
    styles: {
        files: [
            {
                expand: true,
                cwd: 'node_modules/oet-editor-styles/',
                src: [
                    '**/*.*',
                    '!**/*.scss',
                    '!css/',
                    '!node_modules/'
                ], 
                dest: '<%= config.target.dev %>'
            }, 
            {
                expand: true,
                cwd: 'node_modules/oet-editor-styles/css/',
                src: [
                    '**/*.*',
                    '!**/*.scss'
                ], 
                dest: '<%= config.target.dev %>'
            }
        ]
    }
};
