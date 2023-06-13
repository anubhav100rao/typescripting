function isEmpty(obj: Record<string, any> | any[]): boolean {
    
    for(let data in obj) {
        console.log(data);
        return false;
    }
    return true;
};