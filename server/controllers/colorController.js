module.exports={
    getColors: (req, res)=>{
        const db= req.app.get('db')

        db.get_colors()
        .then(colors =>{
            res.status(200).send(colors)
        })
        .catch(err =>{
            if(err) throw err
        })
    }
}