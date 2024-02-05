function readJsonAndReturn(jsonString){

    const json = jsonString;
    var object = JSON.parse(json);
    return object.count;

}