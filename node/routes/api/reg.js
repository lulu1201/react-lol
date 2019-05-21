let express = require('express');
let router = express.Router();
let mgdb = require('../../common/mgdb');
let pathLib = require('path');
let fs = require('fs');

router.post('/', (req, res, next) => {
  // console.log('/api/login',req.query,req.body)
  let { username, password ,nikename } = req.body;

  //multer上传图片,需要解决没有上传头像
  let icon = req.files.length ? require('../../config/path').user.uploadUrl + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext : '';
  if(icon){
    fs.renameSync(
      req.files[0].path,
      req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    )
  }else{
    // icon = require('../../config/path').normal
    icon = "./img/tu5.jpg"
  }


  let time = Date.now();
  let follow=110;
  let fans=520;
  let use="陆霸天";
  let pas="男";
  let age="18";
  let xing="999";

  //校验username/password的合法性
  mgdb({
    collection: "user"
  }, ({ collection, client }) => {
    collection.find({
      username,
      password
    }, {
        projection: { _id: 0, username: 0, password: 0 }
      }).toArray((err, result) => {
        if (!err) {
          if (result.length > 0) {
            res.send({ error:1, msg: '用户名已存在' })
            client.close();
          } else {
            // 写库
            // console.log(3)

            collection.insertOne({
              username,password,follow,nikename,fans,icon,time,use,pas,age,xing
            },(err,result)=>{
              // console.log(result.result.ok);// 添加条件 > 0
              if(result.result.ok>0){
                res.send({ error: 0, msg: '注册成功', data: result.ops })
              }else{
                res.send({ error:1, msg: '注册失败' })
              }
              client.close();
            })
            
          }
        } else {
          res.send({ error: 1, msg: '库操作失败' })
          client.close();
        }
        
      })
  })

})

module.exports = router;