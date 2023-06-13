async function compute(url: string): Promise<string> {
    const response = await fetch(url)
    console.log(url)
    console.log(response);
    return url;
}

const urls: string[] = [
    'https://www.facebook.com',
    'https://www.google.com',
    'https://www.twitter.com',
    'https://www.github.com'
]
for(let url in urls) {
    console.log(compute(url));
}