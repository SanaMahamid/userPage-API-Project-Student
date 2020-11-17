
const apiM = new APIManager()
const renderer = new Renderer()
$("#load").on("click",function(){
    apiM.getData()
})

$("#display").on("click", function(){
    renderer.renderAll(apiM.data)
})

