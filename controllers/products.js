const Product =require("../models/product")
const getAllProducts = async (req, res) => {

    const {name, price,sort,select} =req.query;
    const queryObject ={};

    let apiData=Product.find(queryObject)
    if(name){
        queryObject.name={$regex:name, $options:"i"};
        // console.log(queryObject);

    }

    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix)
    }
    if(select){
        let sortFix=select.split(",").join(" ");
        apiData=apiData.select(sortFix)
    }

    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||3

    let skip=(page-1)*limit;

    apiData=apiData.skip(skip).limit(limit);

    if(price){
        queryObject.price=price;
        
    }
    // console.log(queryObject);
     
    const rooms =await apiData
    res.status(200).json({ rooms});
}

const getAllProductsTesting = async (req, res) => {
    const data =await Product.find(req.query).select("name");
    res.status(200).json({ data});
}

module.exports = { getAllProducts, getAllProductsTesting };