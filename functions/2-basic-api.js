const items = [
    {name: 'susan'},
    {name: 'ana'}
]

exports.handler = async (event, context, cb) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}