const serverless = require("serverless-http");
const express = require("express");
const data = require('./data.js')
const app = express();

/**
 * This function is responsible for fetching all to do data
 * get(req,res) : req represent request Object , res: represent response Object
 */
app.get("/", (req, res) => {
  try{
    return res.status(200).json(data);
  }catch(error){
    console.log(error)
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
  
});


/**
 * This function is responsible for adding data to do list
 * post(req,res) : req represent request Object, res: represent response Object
 */
app.post("/", (req, res) => {
  try{
    data.push(JSON.parse(req.body));
    return res.status(200).json(data);
  }catch(error){
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
 
});


/**
 * This function is responsible for fetching specific item from to do list
 * get(req,res) : req represent request body, res: represent response body
 */
app.get("/:id", (req, res) => {
  try{
     let result;
     for(let i = 0;i<data.length;i++){
        if(data[i]["itemId"] == req.params.id && result == null)  
        {
          result = data[i]
          break;
        }
      }
    return res.status(200).json(result);
  }catch(error){
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
 
});


/**
 * This function is responsible for deleting specific item from to do list
 * delete(req,res) : req represent request Object, res: represent response Object
 */
app.delete("/:id", (req, res) => {
  try{
    for(let i = 0;i<data.length;i++){
        if(data[i]["itemId"] == req.params.id)  
        {
          data.splice(i,1)
          break;
        }
      }
      return res.status(200).json(data);
  }catch(error){
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
});


/**
 * This function is responsible for updating specific item from to do list
 * delete(req,res) : req represent request Object, res: represent response Object
 */
app.patch("/:id", (req, res) => {
  try{
    console.log("REquest Came here")
    let result;
    for(let i = 0;i < data.length;i++){
      console.log(data[i])
        if(data[i]["itemId"] == req.params.id){
          console.log(data)
          data[i]["itemName"] == req.body.itemName
          result = data[i]
        }
      }
      return res.status(200).json(result);

    }catch(error){
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
  
});


/**
 * This function is responsible for updating specific item from to do list
 * delete(req,res) : req represent request Object, res: represent response Object
 */
app.use((req, res) => {
  try{
    return res.status(404).json({
      error: "Not Found",
    });
  }catch(error){
    return res.status(500).json({
      "statusCode" : 500,
      "message" :"Internal Server Error",
      "error":error
    });
  }
 
});

module.exports.handler = serverless(app);
