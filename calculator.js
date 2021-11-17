const operators = ["/","+","-","*"]
document.onkeypress = function (e) {
    e = e || window.event;
    if(e.key=='Enter'){calculate()}
};

function calculate(){
    var problem = document.getElementById("Input").value;problem = problem.split(/([*/+-])+/g)
    let collection = [],modified_collection = [],new_op = [],collection_operators = [];
    var collection_point = 0
    for(let charp = 0; charp <problem.length; charp++){
        var char = problem[charp]
        var is_operator = false
        for(let operator = 0; operator < operators.length; operator++){
            if(operators[operator] == char){;collection_operators.push(char);collection_point+= 1;is_operator = true;break}}
        if(!is_operator){if(collection.length <= collection_point){collection.push([])};collection[collection_point] += char
    }}
    var output =parseInt(collection[0]);collection_point = 0
    for(let num=0; num <collection.length; num++){
        if(modified_collection.length <= collection_point){modified_collection.push(collection[num])}
        switch(collection_operators[num]){
            case("/"):modified_collection[collection_point]/=parseInt(collection[num+1]);break
            case("*"):modified_collection[collection_point]*=parseInt(collection[num+1]);break
            case("+"):collection_point++;break
            case("-"):collection_point++;break
        }}
    for(let cur_operator = 0; cur_operator < collection_operators.length; cur_operator++){
        switch(collection_operators[cur_operator]){
            case("+"):new_op.push(collection_operators[cur_operator]);break
            case("-"):new_op.push(collection_operators[cur_operator]);break
    }};collection_operators = new_op;output = parseInt(modified_collection[0])
    for(let num=0; num <modified_collection.length; num++){
        modified_collection[num] = String(modified_collection[num])
        switch(collection_operators[num]){
            case("/"):output/=parseInt(modified_collection[num+1]);break
            case("*"):output*=parseInt(modified_collection[num+1]);break
            case("+"):output+=parseInt(modified_collection[num+1]);break
            case("-"):output-=parseInt(modified_collection[num+1]);break
    }};if(output != NaN){document.getElementById("output").value = output}
    document.getElementById("Input").value = ""}

const viable_chars = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/']
function add_char(char){
    document.getElementById("Input").value += char
}