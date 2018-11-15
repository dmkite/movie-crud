module.exports = {
    development: { client: 'pg', connection: 'postgresql://localhost/movie_crud_dev' },
    test: { client: 'pg', connection: process.env.DATABASE_URL }

}