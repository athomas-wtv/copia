const equals = (obj1, obj2) => {
    
}

equals({"key1" : "value", "key2" : {"key3": 1}},
    {"key1" : "value", "key2" : {"key3": 1}})

equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
    {"key1" : "value", "key2" : {"key3": 1}})