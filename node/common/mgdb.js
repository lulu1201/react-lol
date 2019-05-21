const MongoClient = require('mongodb').MongoClient;//创建客户端实例
const ObjectID = require('mongodb').ObjectID

module.exports=({url,dbName,collection},callback)=>{

  //可选参数
  url = url || 'mongodb://localhost:27017';
  dbName = dbName || 'cer'
  collection = collection || 'user'

  MongoClient.connect(url,{ useNewUrlParser: true } ,function(err, client) {
    if(err){
      callback({error:1,msg:"库链接有误"});
    }else{
      const db = client.db(dbName);
      collection = db.collection(collection);
      callback({collection,client,ObjectID})
      // client.close();
    }
  });

}