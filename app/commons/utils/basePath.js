export default (route) =>
    process.env.NODE_ENV === 'development'? `/${route}` : `/react-webpack-lazy-loading/${route}`;