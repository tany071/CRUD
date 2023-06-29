const axios = require('axios')



exports.homeRoutes=(req,res)=>{
    axios.get('https://localhost:3000/api/users')
    .then(function(response){
        console.log(response)
        res.render('index',{users:response.data});
        
    })
}

exports.add_user = (req,res)=>{
    res.render('add-user');
}

exports.update_user=(req,res)=>{
    res.render('update_user')
}