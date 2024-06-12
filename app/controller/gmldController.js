const getAllGL = (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            message: `${req.method} - All Gym Leaders Listed`
        });
};

const getGLbyID = (req, res)=>{
    const{id} = req.params;
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} - Specific Gym Leader Queried`,
            id
        });
};

const getGLbyName = (req, res)=>{
    const{name} = req.params;
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} - Specific Gym Leader Queried`,
            name
        });
};

const delGLbyName =(req, res)=>{
    const{name} = req.params;
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} - Gym Leader Deleted by name`,
            name
        });
};

const createGL = (req, res)=>{
    const{name} = req.params;
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} - Created new Gym Leader`,
            name
        });
};
//Can also use exports instead of const and no need to export.module
const editGL = (req, res)=>{
    const{name} = req.params;
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} - Gym Leader updated`,
            name
        });
};

module.exports = {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGLbyName,
    createGL,
    editGL
};