
async function getBookings(req, res) {
    try {
        return res.send({
            username: 'ravi',
            bookings: ['booking1', 'booking2', 'booking3']
        });
    } catch (error) {
        console.log('error :: ', error)
        throw error;
    }
}

module.exports = {
    getBookings
}