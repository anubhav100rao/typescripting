function sortBy(arr: any[], fn: Function): any[] {
    arr.sort((a: any, b: any) => {
        return fn(a) - fn(b);
    });
    return arr;
};