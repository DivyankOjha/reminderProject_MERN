exports.addReminder = async (req, res, next) => {
    console.log("adding reminder...");
    
    res.status(200).json({ status: "success" })
}