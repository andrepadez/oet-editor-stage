module.exports = {
    // development mode
    dev: {
        options: {
            style: 'expanded'
        },
        files: {
            '<%= config.target.dev %><%= pkg.name %>.css': '<%= config.project.root %>layout.scss'
        }
    }
};
