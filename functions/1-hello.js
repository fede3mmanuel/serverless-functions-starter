//domain/.netlify/functions/1-hello
exports.handler = (event, context, cb) => {

    cb(null,
        {statusCode: 200, body: 'Hello world!'})

    //return {
    //    statusCode: 200,
    //    body: 'Our First Netlify Function Example',
    //}
}